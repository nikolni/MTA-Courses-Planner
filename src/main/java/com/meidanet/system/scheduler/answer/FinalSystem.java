package com.meidanet.system.scheduler.answer;

import com.meidanet.system.preference.form.course.request.CoursePreferences;

import java.util.ArrayList;
import java.util.List;

public class FinalSystem {
    private String studentID;

    private List<CoursePreferences> requiredSemesterA;
    private List<CoursePreferences> choiceSemesterA;
    private List<CoursePreferences> requiredSemesterB;
    private List<CoursePreferences> choiceSemesterB;

    private List<String> errors;
    private List<String> changes;

    public void addError(String error){
        if(errors == null){
            errors = new ArrayList<>();
        }
        errors.add(error);
    }

    public void addChanges(List<String> changes){
        if(this.changes == null){
            this.changes = new ArrayList<>();
        }
        this.changes.addAll(changes);
    }

    public void setStudentID(String studentID) {
        this.studentID = studentID;
    }

    public void addReqCourseSemA(CoursePreferences coursePreferences){
        if(requiredSemesterA == null)
            requiredSemesterA = new ArrayList<>();
        requiredSemesterA.add(coursePreferences);
    }

    public void addChoCourseSemA(CoursePreferences coursePreferences){
        if(choiceSemesterA == null)
            choiceSemesterA = new ArrayList<>();
        choiceSemesterA.add(coursePreferences);
    }

    public void addReqCourseSemB(CoursePreferences coursePreferences){
        if(requiredSemesterB == null)
            requiredSemesterB = new ArrayList<>();
        requiredSemesterB.add(coursePreferences);
    }

    public void addChoCourseSemB(CoursePreferences coursePreferences){
        if(choiceSemesterB == null)
            choiceSemesterB = new ArrayList<>();
        choiceSemesterB.add(coursePreferences);
    }

    public List<CoursePreferences> getRequiredSemesterA() {
        return requiredSemesterA;
    }

    public List<CoursePreferences> getChoiceSemesterA() {
        return choiceSemesterA;
    }

    public List<CoursePreferences> getRequiredSemesterB() {
        return requiredSemesterB;
    }

    public List<CoursePreferences> getChoiceSemesterB() {
        return choiceSemesterB;
    }

    public List<String> getErrors(){
        return errors;
    }

    public List<String> getChanges(){
        return changes;
    }
}

