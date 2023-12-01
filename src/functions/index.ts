export const handler = async (event: any) => {
    console.log({ message: 'Hello World, Hi Earlybirdee.' });
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Hello World, Hi Earlybirdee.' }),
    };
}