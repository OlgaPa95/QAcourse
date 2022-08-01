const Students = require('./Students');
const Teachers = require('./Teachers');


const s1 = new Students('jOHn', 20, 'USA', 'mobile');
/*
    idValue = 0
    student = {
        sName : '',
        sAge : 0,
        sCountry : '',
        sId : 0,
        sGrade : '',
        sCourseDetails : {
            courseName : '',
            coursePrice : 0,
            courseLength : 0,
        },
        sBalance : 0
    }
*/

// s1.enrollment('jOHn', 20, 'USA', 'mobile');
/*
        idValue = 1
        student = {
        sName : 'john',
        sAge : 20,
        sCountry : 'USA',
        sId : 0,
        sGrade : '',
        sCourseDetails : {
            courseName : 'Mobile',
            coursePrice : 0,
            courseLength : 0,
        },
        sBalance : 0
    }
*/

s1.showMyDetails();


const s2 = new Students('Gigi', 20, 'USA', 'QA');
/*
    idValue = 0;
    student = {
        sName : '',
        sAge : 0,
        sCountry : '',
        sId : 0,
        sGrade : '',
        sCourseDetails : {
            courseName : '',
            coursePrice : 0,
            courseLength : 0,
        },
        sBalance : 0
    }
*/

// s2.enrollment('Gigi', 20, 'USA', 'QA');


s2.showMyDetails();


const s3 = new Students('kiAN', 21, 'uSa', 'moBiLE');

s3.showMyDetails();
s3.changeCourse('mobile');
s3.showMyDetails();


s3.makePayment(3000);
s3.showMyDetails();

const t1 = new Teachers;
t1.hiring('Alan', 21, 'uSa', 'moBiLE');
t1.showMyDetails();

t1.changeTeachingCourse('mobile');
t1.showMyDetails();