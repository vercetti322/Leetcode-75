const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];

var findDifference = function (nums1, nums2) {
    const one = new Set();
    const two = new Set();
    for (let i = 0; i < nums1.length; i++) {
        if (!nums2.includes(nums1[i])) {
            one.add(nums1[i]);
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        if (!nums1.includes(nums2[i])) {
            two.add(nums2[i]);
        }
    }

    return [[...one], [...two]];
};

console.log(findDifference(nums1, nums2));