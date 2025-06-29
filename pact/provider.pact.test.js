require('dotenv').config();
const path = require('path');
const { Verifier } = require('@pact-foundation/pact');

describe('Pact Verification', () => {
    it('should validate the expectations of the consumer', async () => {
        await new Verifier({
            providerBaseUrl: 'http://localhost:8081', // Your Express server
            pactBrokerUrl: process.env.PACT_BROKER_BASE_URL,
            pactBrokerToken: process.env.PACT_BROKER_TOKEN,
            provider: 'UserService',
            consumerVersionSelectors: [{ mainBranch: true }],
            publishVerificationResult: true,
            providerVersion: process.env.PROVIDER_VERSION || '1.0.0',
            providerVersionBranch: process.env.PROVIDER_BRANCH || 'main',
        }).verifyProvider();
    }, 20000);
});
