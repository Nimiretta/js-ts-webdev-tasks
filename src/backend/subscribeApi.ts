export async function subscribeToNewsletter(
    email: string
): Promise<{ code: number; message: string }> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                code: 200,
                message: `${email} was successfully subscribed`,
            });
        }, 2000);
    });
}
