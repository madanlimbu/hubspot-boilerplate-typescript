interface RequestContext {
    params: any;
    body: any;
    headers: {
        method: 'GET' | 'POST' | 'PATCH';
    };
    contact?: {
        vid: number;
    };
}

type SendResponse = (arg: any) => void;

export const main = (context: RequestContext, sendResponse: SendResponse) => {
    // $HUBSPOT_HOST/_hcms/api/test to test.
    sendResponse({
        body: {
            hubspot: 'Serverless function with typescript.'
        },
        statusCode: 200
    });
};