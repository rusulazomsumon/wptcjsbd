        // 01. introduction 
        /* 
        * Where we can tun JS
        * Using node js
        * In browser console
        * In browser snipet
        */

        // 02. Variable
        /* 
        * let = most used.
        * var
        * const
        */ 

        // 03. Data type
        /* 
        * String 
        * Number
        * Boolean
        * Array 
        * function
        * Object
        * null
        * undefined
        */ 
        // typeof null is a object but it is a error
        // let n = null;
        // console.log(typeof n);
        // let n = null;
        // console.log(typeof n);

        // 04. Oerator 
        /*
        * Arithmetic Operator
        * Increment/Decrement Operator
        * Comparison Operator
        * Logical Operator
        */
        // // comparision operator
        // let a = true;
        // let b = false;
        // console.log(a && b);
        // // outpur false
        // console.log(a || b);
        // // output true

        // // turnary operator ?
        // // find big number form 2
        // let a = 3;
        // let b = 6;
        // let max = a>b ? 3:6;
        // console.log(max);

        // JS BD lecture: objects

        let student = {
            name: 'babu',
            age: 25,
            skill: {
                language: 'PHP',
                freamwork: 'laravel',
                CMS: 'WordPress'
            },
            add: function (x, y) {
                return x+y;
            },
            sayHi: function () {
                console.log("Hi! Im Sumon");
            },
        }
        // console.log(student['age']);
        // console.log(student.name);
        // console.log(student.skill.CMS);
        // console.log(student.add(5,6));
        console.log(student.sayHi());
