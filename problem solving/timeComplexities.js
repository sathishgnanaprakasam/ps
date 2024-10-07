/*
    Example 1:

    let m, n;
    let a = 0;
    let b = 0;

    for(let i=0; i<m; i++){
        a = a + 1;
    }
    
    for(let j=0; j<n; j++){
        b = b + 1;
    }
    
    console.log(a, b);

    What is the time complexity of the code above?

    a. O(1)
    b. O(log n)
    c. O(n)
    d. O(n^2)
    e. O(2^n)
    f. O(n!)


    Solution:

    T(n) = ?

    let m, n;
    let a = 0;
    let b = 0;

    the above statements are declarations and assignments, so they are O(1)

    => number of executions = O(1)

    for(let i=0; i<m; i++){
        a = a + 1;
    }
    
    assume some values for m:

    m = 1; i = 0; executions = 1
    m = 2; i = 0, 1; executions = 2
    m = 3; i = 0, 1, 2; executions = 3
    m = 4; i = 0, 1, 2, 3; executions = 4

    => number of executions = O(m)

    for(let j=0; j<n; j++){
        b = b + 1;
    }
    
    => number of executions = O(n)

    console.log(a, b);

    => number of executions = O(1)

    T(n) = 1 + m + n + 1
         = 2 + m + n
         = m + n [because 2 is a constant and can be ignored]
         = O(m + n)

    Example 2:

    let n;
    let a = 0;
    let b = 0;

    for(let i=0; i<n; i++){
        a = a + 1;
    }
    
    for(let j=0; j<n; j++){
        b = b + 1;
    }
    
    console.log(a, b);

    Solution:

    for(let i=0; i<n; i++){
        a = a + 1;
    }
    
    number of executions = O(n)

    for(let j=0; j<n; j++){
        b = b + 1;
    }
    
    number of executions = O(n)

    T(n) = n + n
         = 2n [because 2 is a constant and can be ignored]
         = O(n)

    Example 3:

    for(let i=0; i<n; i++){
        a = a + 1;
        for(let j=0; j<n; j++){
            b = b + 1;
        }
    }
    
    Method 1:

    Calculate the number of executions for the outer loop: O(n)
    Calculate the number of executions for the inner loop: O(n)

    T(n) = n * n
         = n^2
         = O(n^2)

    Method 2:

    for(let i=0; i<n; i++){
        a = a + 1;
        for(let j=0; j<n; j++){
            b = b + 1;
        }
    }

    a. Make a few assumptions about the values of n

    n = 3
    n = 4
    n = 5

    if n = 3, 

        i = 0; j = 0, 1, 2; executions = 3
        i = 1; j = 0, 1, 2; executions = 3
        i = 2; j = 0, 1, 2; executions = 3

    if n = 4,

        i = 0; j = 0, 1, 2, 3; executions = 4
        i = 1; j = 0, 1, 2, 3; executions = 4
        i = 2; j = 0, 1, 2, 3; executions = 4
        i = 3; j = 0, 1, 2, 3; executions = 4

    if n = 5,

        i = 0; j = 0, 1, 2, 3, 4; executions = 5
        i = 1; j = 0, 1, 2, 3, 4; executions = 5
        i = 2; j = 0, 1, 2, 3, 4; executions = 5
        i = 3; j = 0, 1, 2, 3, 4; executions = 5
        i = 4; j = 0, 1, 2, 3, 4; executions = 5


    b. Calculate the number of executions for the entire nested loop or the inner loop alone depending on the question.

    for n = 3, number of executions = 3 + 3 + 3 = 9

    c. Map and compare the assumptions with the number of executions. Find the pattern and derive the time complexity.

    For n = 3, executions = 9
    For n = 4, executions = 16
    For n = 5, executions = 25
    
    The Generalized Pattern is n^2

    Example 4:

    for(let i=0; i<n; i++){
        a = a + 1;
        for(let j=0; j<=i; j++){
            b = b + 1;
        }
    }
    
    Time Complexity = ?

    a. Assume some random values for n

    n = 3
    n = 4
    n = 5

    b. Find the number of executions

    for n = 3,
        i = 0; j = 0; executions = 1
        i = 1; j = 0, 1; executions = 2
        i = 2; j = 0, 1, 2; executions = 3

        total executions = 1 + 2 + 3 = 6
    
    for n = 4,
        i = 0; j = 0; executions = 1
        i = 1; j = 0, 1; executions = 2
        i = 2; j = 0, 1, 2; executions = 3
        i = 3; j = 0, 1, 2, 3; executions = 4

        total executions = 1 + 2 + 3 + 4 = 10
    
    for n = 5,

        i = 0; j = 0; executions = 1
        i = 1; j = 0, 1; executions = 2
        i = 2; j = 0, 1, 2; executions = 3
        i = 3; j = 0, 1, 2, 3; executions = 4
        i = 4; j = 0, 1, 2, 3, 4; executions = 5

        total executions = 1 + 2 + 3 + 4 + 5 = 15

    c. Find the pattern

    For n = 3, executions = 6
    For n = 4, executions = 10
    For n = 5, executions = 15

    Number of executions = Sum of first n natural numbers
                         = n * (n + 1) / 2

    Sum of first n natural numbers, 
    
    S(n) = 1 + 2 + 3 + ... n-2 + n-1 + n
    S(n) = n + n-1 + n-2 + ... 3 + 2 + 1
    -------------------------------
    2 * S(n) = n+1 + n+1 + n+1 + ... n+1 + n+1 + n+1
    2 * S(n) = n * (n + 1)
    S(n) = n * (n + 1) / 2 

    T(n) = n * (n + 1) / 2
         = n^2 + n [considering only the highest power]
         = O(n^2)

    Example: 5
    
    for(let i=0; i<n; i++){
        a = a + 1;
        for(let j=0; j<i; j++){
            b = b + 1;
        }
    }
    
    Time Complexity = ?

    a. Assume some random values for n

    n = 3
    n = 4
    n = 5

    b. Find the number of executions

    for n = 3,

        i = 0; j = 0; executions = 0
        i = 1; j = 0; executions = 1
        i = 2; j = 0, 1; executions = 2

        total executions = 0 + 1 + 2 = 3
    
    for n = 4,
            
            i = 0; j = 0; executions = 0
            i = 1; j = 0; executions = 1
            i = 2; j = 0, 1; executions = 2
            i = 3; j = 0, 1, 2; executions = 3
    
            total executions = 0 + 1 + 2 + 3 = 6

    for n = 5,

            i = 0; j = 0; executions = 0
            i = 1; j = 0; executions = 1
            i = 2; j = 0, 1; executions = 2
            i = 3; j = 0, 1, 2; executions = 3
            i = 4; j = 0, 1, 2, 3; executions = 4

            total executions = 0 + 1 + 2 + 3 + 4 = 10
    
    c. Find the pattern

    For n = 3, executions = 3
    For n = 4, executions = 6
    For n = 5, executions = 10

    Example: 6

    for(let i=0; i<n; i++){
        for(let j=1; j<=n; j=j*2){
            a = a + 1;
        }
    }
    
    Time Complexity = ?

    a. Assume some random values for n

    n = 15
    n = 29
    n = 30
    n = 31
    n = 40

    b. Find the number of executions


    outer loop: O(n)

    for inner loop: O(log n)

    for n = 15, 
        j = 1, 2, 4, 8; executions = 4

    for n = 29,
        j = 1, 2, 4, 8, 16; executions = 5
    
    for n = 30,
        j = 1, 2, 4, 8, 16; executions = 5
    
    for n = 31,
        j = 1, 2, 4, 8, 16; executions = 5
    
    for n = 40,
        j = 1, 2, 4, 8, 16, 32; executions = 6

    c. Find the pattern

    For n = 15, executions = 4
    For n = 29, executions = 5
    For n = 30, executions = 5
    For n = 31, executions = 5
    For n = 40, executions = 6
*/