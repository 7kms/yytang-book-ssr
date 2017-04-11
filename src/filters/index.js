import util from '../util'
const yFilters = {
    dateDistance(dataStr) {
        let str = '';
        const nowDate = new Date();
        const inputDate = new Date(dataStr);
        const distanceTime = nowDate.getTime() - inputDate.getTime();
        const distanceHour = Math.floor(distanceTime / (1000 * 60 * 60));
        const distanceMinute = Math.floor(distanceTime / (1000 * 60));
        const distanceDate = Math.floor(distanceTime / (86400 * 1000));
        const distanceYear = nowDate.getFullYear() - inputDate.getFullYear();
        const distanceMonth = nowDate.getMonth() - inputDate.getMonth() + 12 * distanceYear;
        if (distanceMinute <= 5) {
            str = `刚刚`;
        } else if (distanceHour < 1) {
            str = `${distanceMinute}分钟前`;
        } else if (distanceDate < 1) {
            str = `${distanceHour}小时前`;
        } else if (distanceMonth <= 1) {
            if (distanceDate == 1) {
                str = '昨天';
            } else if (distanceDate == 2) {
                str = '前天';
            } else {
                str = `${distanceDate}天前`;
            }
        } else if (distanceMonth < 12) {
            str = `${distanceMonth}个月前`;
        } else if (distanceMonth >= 12) {
            str = (distanceMonth % 12) > 0 ? `${distanceYear}年${distanceMonth % 12}个月前` : `${distanceYear}年前`;
        }
        return str;
    },
    dateFormat: util.dateFormat
};
const install = function(Vue) {
    Object.keys(yFilters).forEach((key) => {
        Vue.filter(key, yFilters[key]);
    });
};
export default Object.assign(yFilters, { install });