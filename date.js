
module.exports = getDate;

function getDate(){

    let today = new Date();
    let options={
        weekday: 'long', 
        month: "long",
        // year: "numeric",
        day: "numeric"
    };
    let day= today.toLocaleDateString("en-US",options);
    return day;

}// get date

