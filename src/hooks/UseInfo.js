const activeStatus = (activeDate) => {
    const lastActiveDate = new Date(activeDate);
    const currentDate = new Date();
    const threeMonthsAgoStartDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 3, 1);
    const isActiveLastThreeMonths = lastActiveDate >= threeMonthsAgoStartDate && lastActiveDate <= currentDate;

    if (isActiveLastThreeMonths) {
        return "Active";
    } else {
        return "DeActive";
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

export {
    activeStatus, formatDate
}