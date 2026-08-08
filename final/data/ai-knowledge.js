const aiKnowledge = {

    html: {
        name: "HTML",

        what:
            "HTML, which stands for HyperText Markup Language, is the standard markup language used to structure content on web pages.",

        why:
            "HTML provides the structural foundation of a website. It tells the browser what each part of the page represents, such as headings, paragraphs, images, links, forms, navigation, and articles.",

        how:
            "You get started with HTML by creating an `.html` file and learning elements such as `<html>`, `<head>`, `<body>`, headings, paragraphs, links, images, lists, forms, and semantic elements.",

        example: `
<p>
    Learn programming with CodeHouse.
</p>

<a href="courses.html">
    Explore Courses
</a>
`,

        tip:
            "Start with semantic HTML. Elements such as `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` make your pages easier to understand and maintain."
    },


    css: {
        name: "CSS",

        what:
            "CSS, or Cascading Style Sheets, is the language used to control the appearance and layout of HTML documents.",

        why:
            "CSS allows developers to separate the visual design of a website from its HTML structure. It controls colors, spacing, typography, positioning, animations, grids, Flexbox, and responsive layouts.",

        how:
            "Start by learning selectors, properties, values, the box model, Flexbox, CSS Grid, responsive design, media queries, and CSS variables.",

        example: `
.course-card {
    padding: 1.5rem;
    border-radius: 12px;
    background: white;
}

.course-grid {
    display: grid;
    grid-template-columns:
        repeat(3, 1fr);
    gap: 1rem;
}
`,

        tip:
            "Do not try to memorize every CSS property. Learn the box model, Flexbox, Grid, positioning, responsive design, and how selectors work."
    },


    javascript: {
        name: "JavaScript",

        what:
            "JavaScript is a programming language used to add behavior, logic, and interactivity to websites and applications.",

        why:
            "JavaScript allows a webpage to respond to user actions, modify content, communicate with APIs, validate forms, create animations, and build complete applications.",

        how:
            "Begin with variables, data types, conditions, loops, functions, arrays, objects, and events. Then progress to the DOM, modules, asynchronous programming, promises, fetch, and APIs.",

        example: `
const button =
    document.querySelector("#start-button");

button.addEventListener("click", () => {

    console.log(
        "Welcome to CodeHouse!"
    );

});
`,

        tip:
            "Focus on understanding how JavaScript thinks rather than memorizing syntax. Functions, objects, arrays, conditions, and asynchronous programming are especially important."
    },


    python: {
        name: "Python",

        what:
            "Python is a high-level general-purpose programming language known for its readable syntax and large ecosystem.",

        why:
            "Python is used for web development, automation, data analysis, artificial intelligence, machine learning, scripting, testing, and education.",

        how:
            "Start with variables, strings, numbers, lists, dictionaries, conditions, loops, and functions. Then learn modules, exceptions, classes, packages, and virtual environments.",

        example: `
def greet(name):
    return f"Hello, {name}!"

message = greet("CodeHouse")

print(message)
`,

        tip:
            "Build small projects while learning Python. A calculator, quiz application, student management system, or simple API can teach you more than memorizing syntax alone."
    },


    java: {
        name: "Java",

        what:
            "Java is a general-purpose, object-oriented programming language designed to run across different platforms through the Java Virtual Machine.",

        why:
            "Java is widely used for enterprise software, backend systems, large applications, and many systems where portability and strong tooling are important.",

        how:
            "Start with variables, conditions, loops, methods, classes, and objects. Then learn inheritance, interfaces, exceptions, collections, generics, and streams.",

        example: `
public class Main {

    public static void main(String[] args) {

        System.out.println(
            "Hello, CodeHouse!"
        );

    }

}
`,

        tip:
            "Spend time understanding classes and objects. Object-oriented programming is one of the most important foundations of Java."
    },


    c: {
        name: "C",

        what:
            "C is a compiled programming language that provides structured programming and relatively low-level control over memory and computer resources.",

        why:
            "C is important for systems programming, embedded systems, operating systems, firmware, and understanding how computers manage memory.",

        how:
            "Learn variables, data types, conditions, loops, functions, arrays, pointers, structures, memory allocation, and file handling.",

        example: `
#include <stdio.h>

int main() {

    printf(
        "Hello, CodeHouse!\\n"
    );

    return 0;
}
`,

        tip:
            "Pointers are one of the most important concepts in C. Learn what a pointer stores and how memory addresses work."
    },


    cpp: {
        name: "C++",

        what:
            "C++ is a high-performance programming language that builds upon C and adds object-oriented, generic, and modern programming features.",

        why:
            "C++ is commonly used for games, graphics, simulations, embedded systems, browsers, and applications where performance and resource control are important.",

        how:
            "Learn C++ syntax, functions, classes, references, templates, the Standard Library, algorithms, smart pointers, and modern memory-management practices.",

        example: `
#include <iostream>

int main() {

    std::cout
        << "Hello, CodeHouse!";

    return 0;
}
`,

        tip:
            "Learn modern C++ rather than treating it only as 'C with classes'. Modern C++ includes powerful abstractions such as smart pointers, templates, and the Standard Library."
    },


    csharp: {
        name: "C#",

        what:
            "C# is a strongly typed programming language in the .NET ecosystem.",

        why:
            "C# is used for web applications, APIs, enterprise software, desktop applications, cloud services, and game development with Unity.",

        how:
            "Start with types, variables, conditions, loops, methods, classes, interfaces, collections, LINQ, exceptions, and asynchronous programming.",

        example: `
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine(
            "Hello, CodeHouse!"
        );
    }
}
`,

        tip:
            "Learn C# together with the .NET ecosystem. Understanding how projects, packages, dependency injection, and APIs work will make your skills much more practical."
    },


    php: {
        name: "PHP",

        what:
            "PHP is a server-side programming language commonly used to build dynamic websites and backend applications.",

        why:
            "PHP has a mature web ecosystem and is used for websites, APIs, content-management systems, ecommerce applications, and backend services.",

        how:
            "Learn variables, arrays, functions, forms, sessions, classes, databases, exceptions, Composer, and modern PHP application architecture.",

        example: `
<?php

echo "Hello, CodeHouse!";

?>
`,

        tip:
            "Modern PHP is much more than writing PHP directly inside HTML. Learn object-oriented programming, Composer, namespaces, and a modern framework such as Laravel."
    },


    django: {
        name: "Django",

        what:
            "Django is a high-level Python web framework designed to help developers build secure and maintainable web applications quickly.",

        why:
            "Django provides tools for URL routing, database models, authentication, forms, administration, security, and application structure.",

        how:
            "Create a Django project, create applications, define models, run migrations, configure URLs, create views, use templates or APIs, and work with authentication.",

        example: `
from django.http import HttpResponse

def home(request):

    return HttpResponse(
        "Welcome to CodeHouse!"
    )
`,

        tip:
            "Learn Django after becoming comfortable with Python. Understanding Python functions, classes, modules, and dictionaries will make Django much easier."
    },


    nodejs: {
        name: "Node.js",

        what:
            "Node.js is a JavaScript runtime that allows JavaScript to run outside the browser.",

        why:
            "Node.js is useful for backend APIs, real-time applications, command-line tools, development utilities, and applications that benefit from JavaScript across the stack.",

        how:
            "Install Node.js, create a project with npm, learn modules and asynchronous programming, then build HTTP servers and APIs.",

        example: `
const http = require("http");

const server = http.createServer(
    (request, response) => {

        response.end(
            "Hello from CodeHouse!"
        );

    }
);

server.listen(3000);
`,

        tip:
            "Understand asynchronous JavaScript before building large Node.js applications. Promises and async/await are especially important."
    },


    react: {
        name: "React",

        what:
            "React is a JavaScript library for building user interfaces using reusable components.",

        why:
            "React makes complex interfaces easier to organize by breaking them into smaller reusable components and managing UI state.",

        how:
            "Learn components, JSX, props, state, events, conditional rendering, lists, hooks, forms, and data fetching.",

        example: `
function Welcome() {

    return (
        <section>

            <h1>
                Welcome to CodeHouse
            </h1>

            <p>
                Learn programming with AI.
            </p>

        </section>
    );

}
`,

        tip:
            "Think in components. If part of your interface can have its own responsibility, it may deserve to become a reusable component."
    },


    nextjs: {
        name: "Next.js",

        what:
            "Next.js is a React framework for building modern full-stack web applications.",

        why:
            "Next.js adds routing, rendering strategies, server capabilities, optimization, and application conventions around React.",

        how:
            "Create a Next.js project and learn the App Router, layouts, pages, server and client components, data fetching, route handlers, metadata, and deployment.",

        example: `
export default function HomePage() {

    return (
        <main>

            <h1>
                Welcome to CodeHouse
            </h1>

        </main>
    );

}
`,

        tip:
            "Learn React fundamentals first. Next.js becomes much easier when you already understand components, props, state, and JavaScript."
    },


    laravel: {
        name: "Laravel",

        what:
            "Laravel is a PHP web framework designed to make backend and full-stack web development expressive and organized.",

        why:
            "Laravel provides routing, controllers, database tools, migrations, authentication features, validation, queues, caching, and the Eloquent ORM.",

        how:
            "Create a Laravel project, configure its environment, define routes and controllers, create models and migrations, and build views or APIs.",

        example: `
Route::get(
    "/",
    function () {

        return "Welcome to CodeHouse!";

    }
);
`,

        tip:
            "Learn MVC concepts and understand how routes, controllers, models, migrations, and views work together."
    },


    bootstrap: {
        name: "Bootstrap",

        what:
            "Bootstrap is a frontend framework that provides responsive layout tools, reusable components, utility classes, and JavaScript-powered interface features.",

        why:
            "Bootstrap allows developers to create responsive interfaces quickly without building every common UI component from scratch.",

        how:
            "Include Bootstrap in your project and learn its containers, grid system, responsive utilities, buttons, forms, navigation, cards, and other components.",

        example: `
<div class="row">

    <div class="col-md-6">
        CodeHouse
    </div>

    <div class="col-md-6">
        Cloud
    </div>

</div>
`,

        tip:
            "Learn Bootstrap's grid and utility classes first. They will give you a strong foundation for building responsive pages."
    },


    tailwind: {
        name: "Tailwind CSS",

        what:
            "Tailwind CSS is a utility-first CSS framework that allows developers to compose interfaces using small reusable utility classes.",

        why:
            "Tailwind makes it possible to build custom interfaces quickly while maintaining consistent spacing, typography, colors, and responsive behavior.",

        how:
            "Install Tailwind in your project and compose utility classes such as flex, grid, p-4, text-lg, rounded-lg, and responsive variants.",

        example: `
<div class="flex items-center justify-between p-4">

    <h1 class="text-xl font-bold">
        CodeHouse
    </h1>

    <button class="rounded-lg px-4 py-2">
        Start Learning
    </button>

</div>
`,

        tip:
            "Do not think of Tailwind as replacing CSS knowledge. Understanding CSS fundamentals makes Tailwind much easier to use effectively."
    }

};

export default aiKnowledge;