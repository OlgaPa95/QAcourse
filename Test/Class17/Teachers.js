const Members = require("./Members");
const MyStringFunctions = require("./MyStringFunctions");


 // Array of course-objects
 const teacherCourseDetails = [
    {
        courseName : 'Automation',
        price : 1000,
        length : 6
    },
    {
        courseName : 'QA',
        price : 2000,
        length : 8
    },
    {
        courseName : 'Mobile',
        price : 3000,
        length : 12
    }
]



class Teachers extends Members {

    static idValue = 0;

    teacher = {
        tId : 0,
        tCourseName : '',
        tSalary : 0
    }

    /**
     * 
     * age >= 21
     * 
     * teacherCourseName should be Automation, QA or Mobile
     * 
     */
    hiring(teacherName, teacherAge, teacherCountry, teacherCourseName) {
      
        if (teacherAge >= 21 && this.isTeacherCourseNameValid(teacherCourseName)) {
            const courseData = this.isTeacherCourseNameValid(teacherCourseName);
            this.member.name = MyStringFunctions.toTitleCase(teacherName);
            this.member.age = teacherAge;
            this.member.location = teacherCountry.toUpperCase();      
            this.teacher.tCourseName = courseData.courseNameteacherCourseName;     
            this.teacher.tId = ++Teachers.idValue;
            console.log(`\nYou're Hired! \nThank you.\n Your id is: ${this.teacher.tId}`);
        } else {
            console.log("\nYou cannot be hired");
        }
    }
    
    isTeacherCourseNameValid(checkForCourse) {
        return teacherCourseDetails.find(course => course.courseName.toLowerCase().localeCompare(checkForCourse.toLowerCase()) === 0);
    }
    

    showMyDetails() {        
        super.showMyDetails();
        console.log(`Teaching Course: ${this.teacher.tCourseName}`)
        
    }

    changeTeachingCourse(newTeacherCourseName) {
        if(this.isTeachingCourseNameValid(newTeacherCourseName) && this.teacher.tCourseName != newTeacherCourseName){
            const courseData = this.isTeachingCourseNameValid(newTeacherCourseName);
            this.teacher.tCourseName = courseData.newTeacherCourseName;
            
        }else if 
           ( (this.isTeachingCourseNameValid(newTeacherCourseName)) != 0 ){
            console.log('Invalid course name')
           }
           else if(this.teacher.tCourseName.toLowerCase().localeCompare(newTeacherCourseName.toLowerCase()) === 0){
                   console.log('You teach this course already.')
           }
    }

    /**
     * addGrade
     * 
     * input: studentId, grade
     * 
     * if studentId is valid and studentGrade is ''
     *      update student.sGrade = grade (always store grade in Uppercase)
     *      print -> grade is successfully added to student id -> id
     * if studentGrade is NOT ''
     *      then print -> remove grade from the student
     * if studentId is invalid
     *      then print -> Invalid student id  
     * 
     */
    addGrade(studentId, grade) {
        // code
    }

    /**
     * removeGrade
     * 
     * input: studentId
     * 
     * if studentId is valid and studentGrade is NOT ''
     *      update student.sGrade = ''
     *      print -> grade is successfully removed from student id -> id
     * if studentGrade is ''
     *      then print -> Student has no grade
     * if studentId is invalid
     *      then print -> Invalid student id
     * 
     */
    removeGrade() {
        // code
    }


}



module.exports = Teachers;