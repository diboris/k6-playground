import http from 'k6/http'
import {describe, expect} from 'https://jslib.k6.io/k6chaijs/4.3.4.2/index.js'
import {htmlReport} from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js'

export const options = {
    stages: [
        {target: 10, duration: '30s'},
        {target: 15, duration: '30s'},
        {target: 5, duration: '10s'}
    ],
    ext: {
        loadimpact: {
            projectID: 3620670,
            name: 'k6-playground'
        }
    },
}

export default function () {
    describe('My message page should return 200 depending on stages', () => {
        const response = http.get('https://test.k6.io/my_messages.php')

        expect(response.status, 'response status').to.equal(200)
    })

    describe('Login to my message should return 200 depending on stages', () => {
        const response = http.post('https://test.k6.io/my_messages.php', {login: 'admin', password: '123'})

        expect(response.status, 'response status').to.equal(200)
    })
}

export function handleSummary(data) {
    return {
        "stages-test.html": htmlReport(data),
    }
}