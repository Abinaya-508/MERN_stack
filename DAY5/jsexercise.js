/* =========================
    BEGINNER
========================= */

// 1. Get User Initials
function getUserInitials(user) {
    return user.firstName[0] + user.lastName[0];
}

// 2. Count Object Properties
function countProperties(obj) {
    return Object.keys(obj).length;
}

// 3. Invert Object
function invertObject(obj) {
    const result = {};
    for (let key in obj) {
    result[obj[key]] = key;
    }
    return result;
}

// 4. Remove Falsy Values
function removeFalsyValues(arr) {
    return arr.filter(Boolean);
}


/* =========================
    EASY
========================= */

// 5. Group By Age
function groupByAge(people) {
    return people.reduce((acc, person) => {
    acc[person.age] = acc[person.age] || [];
    acc[person.age].push(person);
    return acc;
    }, {});
}

// 6. Most Frequent Element
function findMostFrequentElement(arr) {
    const freq = {};
    let max = 0;
    let result;

    for (let val of arr) {
    freq[val] = (freq[val] || 0) + 1;
    if (freq[val] > max) {
        max = freq[val];
        result = val;
    }
    }
    return result;
}

// 7. Flatten Array (any depth)
function flatten(arr) {
    return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flatten(val) : val);
    }, []);
}


/* =========================
    MEDIUM
========================= */

// 8. Deep Merge Objects
function mergeObjects(...objects) {
    const result = {};

    for (let obj of objects) {
    for (let key in obj) {
        if (
        typeof obj[key] === "object" &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
        ) {
        result[key] = mergeObjects(result[key] || {}, obj[key]);
        } else {
        result[key] = obj[key];
        }
    }
    }
    return result;
}

// 9. Rotate Array Right
function rotateArray(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, arr.length - k));
}

// 10. Intersection of Two Arrays
function intersection(nums1, nums2) {
    const set2 = new Set(nums2);
    return [...new Set(nums1.filter(n => set2.has(n)))];
}

// 11. Group Anagrams
function groupAnagrams(words) {
    const map = {};

    for (let word of words) {
    const key = word.split("").sort().join("");
    map[key] = map[key] || [];
    map[key].push(word);
    }
    return Object.values(map);
}


/* =========================
    MEDIUM - HARD
========================= */

// 12. Move Zeros to End (in-place)
function moveZerosToEnd(arr) {
    let index = 0;

    for (let num of arr) {
    if (num !== 0) {
        arr[index++] = num;
    }
    }
    while (index < arr.length) {
    arr[index++] = 0;
    }
    return arr;
}


/* =========================
    HARD
========================= */

// 13. Longest Consecutive Sequence
function longestConsecutiveSequence(nums) {
    const set = new Set(nums);
    let maxLen = 0;

    for (let num of set) {
    if (!set.has(num - 1)) {
        let current = num;
        let length = 1;

        while (set.has(current + 1)) {
        current++;
        length++;
        }
        maxLen = Math.max(maxLen, length);
    }
    }
    return maxLen;
}

// 14. Product of Array Except Self
function productExceptSelf(nums) {
    const result = new Array(nums.length).fill(1);

    let left = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = left;
        left *= nums[i];
    }

    let right = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= right;
        right *= nums[i];
    }

    return result;
}

// 15. Deep Equal
function deepEqual(a, b) {
    if (a === b) return true;

    if (
    typeof a !== "object" ||
    typeof b !== "object" ||
    a === null ||
    b === null
    ) {
    return false;
    }

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    for (let key of keysA) {
    if (!deepEqual(a[key], b[key])) return false;
    }
    return true;
}

// 16. Serialize & Deserialize (Custom)
function serializeObject(obj) {
    return JSON.stringify(obj, (key, value) => {
    if (value instanceof Date)
        return { __type: "Date", value: value.toISOString() };

    if (value instanceof Map)
        return { __type: "Map", value: [...value] };

    if (value instanceof Set)
        return { __type: "Set", value: [...value] };

    if (value === undefined)
        return { __type: "Undefined" };

    return value;
    });
}

function deserializeObject(str) {
    return JSON.parse(str, (key, value) => {
    if (value?.__type === "Date") return new Date(value.value);
    if (value?.__type === "Map") return new Map(value.value);
    if (value?.__type === "Set") return new Set(value.value);
    if (value?.__type === "Undefined") return undefined;
    return value;
    });
}