export const readableTime = (time) => {
    const date = new Date(time)
    const reableDate = date.toLocaleDateString('uk-UA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
    const readableTime = date.toLocaleTimeString('uk-UA', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    return `${reableDate}, ${readableTime}`
};

