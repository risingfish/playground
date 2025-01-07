<?php
function getHighest($value1, $value2, $value3) {
    // Store values in an array with their respective indices
    $values = [$value1, $value2, $value3];

    // Find the index of the highest value using array_keys and max
    $highestIndex = array_keys($values, max($values))[0];

    return $highestIndex;
}

// Example usage
echo getHighest(5, 15, 10); // Outputs: 1

$newVal = 2 >> 1;
echo "test: " . $newVal;