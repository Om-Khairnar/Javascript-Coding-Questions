function isAnagram(str1, str2) {
  // Remove spaces and convert to lowercase
  str1 = str1.replace(/\s/g, '').toLowerCase();
  str2 = str2.replace(/\s/g, '').toLowerCase();

  // If lengths are different, not anagrams
  if (str1.length !== str2.length) return false;

  // Sort both strings and compare
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}
