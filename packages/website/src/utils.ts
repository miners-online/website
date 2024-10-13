export const formatDate = (date: string | Date): string => {
    return new Intl.DateTimeFormat(navigator.language).format(new Date(date));
};

export const timeAgo = (date: string | Date): string => {
    const now = new Date();
    const seconds = Math.floor((now.getTime() - new Date(date).getTime()) / 1000);
    
    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1) return `${interval} year${interval === 1 ? '' : 's'} ago`;
    
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) return `${interval} month${interval === 1 ? '' : 's'} ago`;
    
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) return `${interval} day${interval === 1 ? '' : 's'} ago`;
    
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) return `${interval} hour${interval === 1 ? '' : 's'} ago`;
    
    interval = Math.floor(seconds / 60);
    if (interval >= 1) return `${interval} minute${interval === 1 ? '' : 's'} ago`;
    
    return `${seconds} second${seconds === 1 ? '' : 's'} ago`;
};


export const formatNumber = (number: number, abbreviate = true) => {
    const x = Number(number)
    if (x >= 1000000 && abbreviate) {
        return `${(x / 1000000).toFixed(2).toString()}M`
    } else if (x >= 10000 && abbreviate) {
        return `${(x / 1000).toFixed(1).toString()}k`
    }
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}