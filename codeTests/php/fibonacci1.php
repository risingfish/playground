<?php

/**
 * Loop
 * @param int $n
 * @return int
 */
function fibonacci(int $n): int {
    $num1 = 0;
    $num2 = 1;

    for ( $i = 0; $i < $n; $i++ ) {
        $num3 = $num1 + $num2;
        $num1 = $num2;
        $num2 = $num3;
    }

    return $num1;
}

/**
 * Recursive
 * @param int $n
 * @return int
 */
function fibonacci2(int $n): int {
    if ($n === 0 || $n === 1) {
        return $n;
    }

    return fibonacci2($n - 1) + fibonacci2($n - 2);
}

// Driver Code
echo fibonacci(10);
echo "\n";
echo fibonacci2(10);
