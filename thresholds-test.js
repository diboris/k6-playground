import http from 'k6/http'
import {describe, expect} from 'https://jslib.k6.io/k6chaijs/4.3.4.2/index.js'
import {htmlReport} from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export let options = {
    duration: '1m',
    vus: 20,
    ext: {
        loadimpact: {
            projectID: 3620670,
            name: 'k6-playground'
        }
    },
    thresholds: {
        http_req_failed: ['rate<0.03'],
        http_req_duration: ['p(95) < 135'],
    }
}

export default function () {
    describe('My message page should return less than 3% errors and 95% of requests should be below 135ms', () => {
        const response = http.get('https://test.k6.io/my_messages.php')

        expect(response.status, 'response status').to.equal(200)
    })

    describe('Login to my message should less than 3% errors and 95% of requests should be below 125ms ', () => {
        const response = http.post('https://test.k6.io/my_messages.php', {login: 'admin', password: '123'})

        expect(response.status, 'response status').to.equal(200)
    })
}

export function handleSummary(data) {
    return {
        "thresholds-test.html": htmlReport(data),
    }
}