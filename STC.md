




# @STCGoal : Patient Data is Nicely presented in a Card

 src/app/app.module.ts                                     |  29 ++++++++++--
 src/app/entities/patientchart.ts                          |  17 +++++++
 src/app/entities/patientuser.ts                           |  23 ++++++++++
 src/app/entities/vsign.ts                                 |   6 +++
 src/app/pipe/dt2age.pipe.ts                               |  28 ++++++++++++
 src/app/services/age-calculator.service.ts                |  18 ++++++++
 src/app/services/age-from-date-string.ts                  |  42 +++++++++++++++++
 src/app/x/xtabs/xtabs.component.html                      |  14 ++++++
 src/app/xform/xformnewuser/xformnewuser.component.html    | 108 ++++++++++++++++++++++++++++++++++++++++++++
 src/app/xform/xformnewuser/xformnewuser.component.scss    |  38 ++++++++++++++++
 src/app/xform/xformnewuser/xformnewuser.component.ts      |  73 ++++++++++++++++++++++++++++++
 19 files changed, 514 insertions(+), 3 deletions(-)
 



## First, Last, Email, Birth (implication: Age)
### Email
* Validated
###Elements
* ngSubmit
* ngModel

# CR: created some

## Hero Exercise

https://angular.io/guide/forms#setup

You'll build this form in small steps:

### Create the Hero model class.
### Create the component that controls the form.
### Create a template with the initial form layout.
### Bind data properties to each form control using the ngModel two-way data-binding syntax.
### Add a name attribute to each form-input control.
### Add custom CSS to provide visual feedback.
### Show and hide validation-error messages.
### Handle form submission with ngSubmit.
### Disable the form’s Submit button until the form is valid.


----

--@o How do I bind a Model to a Form ?


## DT pick
https://material.angular.io/components/datepicker/overview

## Field 
https://material.angular.io/components/form-field/overview

## Select Gender
## Radio or Select

https://material.angular.io/components/radio/api
https://material.angular.io/components/select/overview



