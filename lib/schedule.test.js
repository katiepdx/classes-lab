// Import classes 
const Schedule = require('./schedule.js');

describe('Schedule', () => {
    it('tests for free minutes in the schedule', () => {
        const minutesSchedule = new Schedule();

        // nextOpenMinute - return first free minute
        expect(minutesSchedule.nextOpenMinute()).toEqual(0);
    })

})