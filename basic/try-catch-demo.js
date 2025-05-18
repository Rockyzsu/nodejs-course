try {
    try {
        throw new Error('Inner error');
    } catch (innerError) {
        console.log('Inner catch block:', innerError.message);
    }
} finally {
    console.log('Outer finally block executed');
}