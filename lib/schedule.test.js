// Import classes 
const Schedule = require('./schedule.js');

describe('Schedule', () => {
    const minutesSchedule = new Schedule();
    it('tests for free minutes in the schedule', () => {
        expect(minutesSchedule.nextOpenMinute()).toEqual(0);
    })

    it('tests that clear schedule changes minutes back to false', () => {
        expect(minutesSchedule.clear()).toEqual([...Array(1440).fill(false)]);
    })
})