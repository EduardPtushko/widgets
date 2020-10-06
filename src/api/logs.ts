const sleep = (time: number) =>
    new Promise((resolve) => {
        setTimeout(() => resolve, time);
    });

export const reportError = async (
    error: Error,
    info?: unknown,
): Promise<{ success: boolean }> => {
    await sleep(1000);
    return {
        success: true,
    };
};
