


function ArrayChallenge($arr) {
  
    sort($arr);
  $sum = array_sum($arr);

  if ($sum % 2 !== 0) {
    return -1;
  }

  $targetSum = $sum / 2;

  $currentSum = 0;
  $index = 0;

  while ($currentSum < $targetSum) {
    $currentSum += $arr[$index];
    $index++;
  }

  if ($currentSum > $targetSum) {
    $index--;
    $currentSum -= $arr[$index];
  }

  $firstSet = array_slice($arr, 0, $index);

  $secondSet = array_slice($arr, $index);

  return implode(',', $firstSet) . ',' . implode(',', $secondSet);
}

echo.ArrayChallenge(fgets(fopen('php://stdin', 'r')));  
