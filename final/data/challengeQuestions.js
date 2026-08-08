

const challengeQuestions = {

    

    "python-basics": [

        `
        You are helping a small business automate its daily sales
        calculations. The business wants a Python program that asks
        the user for the number of products sold, the price of each
        product, and the amount of discount given to the customer.

        The program should calculate the total price before the
        discount, calculate the discount amount, and then display
        the final amount the customer needs to pay.

        Explain how you would use variables, input(), arithmetic
        operators, and appropriate data types to solve this problem.

        Write a Python solution and briefly explain what each
        important part of your code does.
        `,

        `
        Imagine that CodeHouse wants to create a simple Python
        student grading program.

        The program should ask for a student's score and determine
        whether the student passed, failed, or achieved an excellent
        grade.

        A score of 70 or above should be considered excellent, a
        score from 50 to 69 should be considered a pass, and
        anything below 50 should be considered a failure.

        Explain how conditional statements work in Python and write
        a program that performs this task.

        Also explain what would happen if the user entered a score
        outside the expected range.
        `,

        `
        A teacher has a list containing the scores of several
        students in a programming class.

        The teacher wants a Python program that goes through the
        list, calculates the total score, determines the average
        score, and identifies the highest score.

        Explain how lists, loops, variables, and built-in Python
        functions can be used to solve the problem.

        Then write a Python program that demonstrates your solution.

        Finally, explain why using a loop is useful when the number
        of students changes.
        `,

        `
        You have been asked to build a simple Python login system
        for a school website.

        The system should store a username and password, ask the
        user to enter their login information, and compare the
        entered values with the stored credentials.

        If both values are correct, the program should display a
        successful login message.

        Otherwise, it should tell the user that the credentials
        are incorrect.

        Explain how variables, strings, conditional statements,
        and comparison operators work together in your solution.

        Then provide the Python code.
        `
    ],


    "javascript-arrays": [

        `
        You are building a student management feature for CodeHouse
        using JavaScript.

        You are given an array containing the names of students
        enrolled in a programming course.

        The application needs to display every student, determine
        how many students are enrolled, add a new student, remove
        a student, and check whether a particular student exists
        in the array.

        Explain how JavaScript arrays work and identify the methods
        you would use for each operation.

        Then write JavaScript code that demonstrates the complete
        solution.
        `,

        `
        Imagine you are building a CodeHouse course dashboard.

        You have an array of course objects, where every object
        contains a course name, programming language, difficulty
        level, and number of weeks.

        You need to display only the courses suitable for beginners
        and create a new array containing their names.

        Explain how array methods such as filter() and map() can
        be used to solve this problem.

        Provide a JavaScript example and explain the difference
        between filter() and map().
        `,

        `
        A CodeHouse developer receives a JavaScript array
        containing student scores.

        The application needs to calculate the average score,
        identify the highest score, identify the lowest score,
        and determine how many students scored at least 50 percent.

        Explain how loops or array methods can be used to process
        the data.

        Write a complete JavaScript solution and explain why
        your approach works.
        `,

        `
        You are creating a search feature for CodeHouse.

        You have an array containing programming courses such as
        Python, JavaScript, C++, React, Django, and HTML.

        The user enters a search term and the application should
        return courses whose names contain that search term without
        being affected by uppercase or lowercase letters.

        Explain how strings, arrays, includes(), and filter() can
        work together to create this feature.

        Then write the JavaScript code.
        `
    ],


    "algorithm-challenge": [

        `
        A delivery company wants to optimize the way it organizes
        packages before sending them to customers.

        You are given an unsorted list of package weights.

        The company wants the program to find the smallest package,
        the largest package, and arrange all packages from the
        lightest to the heaviest.

        Explain the algorithm you would use, describe its main
        steps, and provide pseudocode or code demonstrating your
        solution.

        Also explain why the efficiency of an algorithm matters
        when the number of packages becomes very large.
        `,

        `
        CodeHouse has a registration system containing thousands
        of student records.

        Each student has a unique student ID.

        You need to design an algorithm that can quickly determine
        whether a particular student ID exists in the collection.

        Explain the difference between linear search and binary
        search.

        Describe the conditions required for binary search to work
        correctly and provide pseudocode for a binary search
        algorithm.

        Finally, explain why binary search can be much faster than
        checking every item individually.
        `,

        `
        You are given a list of numbers and need to find two
        different numbers whose values add up to a target number.

        For example, if the target is 10, the program should be
        able to find values such as 3 and 7.

        Explain at least two possible approaches to solving this
        problem.

        Compare their time complexity and explain which approach
        you would choose if the list contained millions of numbers.

        Provide pseudocode or code for your preferred solution.
        `,

        `
        A school wants to organize student names alphabetically
        before displaying them on its website.

        The original list may contain hundreds or thousands of
        names in random order.

        Explain how a sorting algorithm can solve this problem.

        Choose one sorting algorithm, describe how it works step
        by step, provide pseudocode or code, and discuss its
        approximate time complexity.

        Finally, explain why algorithm efficiency becomes more
        important as the amount of data increases.
        `
    ]

};


/* =========================================================
   EXPORT
========================================================= */

export default challengeQuestions;