"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/map-obj";
exports.ids = ["vendor-chunks/map-obj"];
exports.modules = {

/***/ "(rsc)/./node_modules/map-obj/index.js":
/*!***************************************!*\
  !*** ./node_modules/map-obj/index.js ***!
  \***************************************/
/***/ ((module) => {

eval("\nconst isObject = (value)=>typeof value === \"object\" && value !== null;\nconst mapObjectSkip = Symbol(\"skip\");\n// Customized for this use-case\nconst isObjectCustom = (value)=>isObject(value) && !(value instanceof RegExp) && !(value instanceof Error) && !(value instanceof Date);\nconst mapObject = (object, mapper, options, isSeen = new WeakMap())=>{\n    options = {\n        deep: false,\n        target: {},\n        ...options\n    };\n    if (isSeen.has(object)) {\n        return isSeen.get(object);\n    }\n    isSeen.set(object, options.target);\n    const { target } = options;\n    delete options.target;\n    const mapArray = (array)=>array.map((element)=>isObjectCustom(element) ? mapObject(element, mapper, options, isSeen) : element);\n    if (Array.isArray(object)) {\n        return mapArray(object);\n    }\n    for (const [key, value] of Object.entries(object)){\n        const mapResult = mapper(key, value, object);\n        if (mapResult === mapObjectSkip) {\n            continue;\n        }\n        let [newKey, newValue, { shouldRecurse = true } = {}] = mapResult;\n        // Drop `__proto__` keys.\n        if (newKey === \"__proto__\") {\n            continue;\n        }\n        if (options.deep && shouldRecurse && isObjectCustom(newValue)) {\n            newValue = Array.isArray(newValue) ? mapArray(newValue) : mapObject(newValue, mapper, options, isSeen);\n        }\n        target[newKey] = newValue;\n    }\n    return target;\n};\nmodule.exports = (object, mapper, options)=>{\n    if (!isObject(object)) {\n        throw new TypeError(`Expected an object, got \\`${object}\\` (${typeof object})`);\n    }\n    return mapObject(object, mapper, options);\n};\nmodule.exports.mapObjectSkip = mapObjectSkip;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWFwLW9iai9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLE1BQU1BLFdBQVdDLENBQUFBLFFBQVMsT0FBT0EsVUFBVSxZQUFZQSxVQUFVO0FBQ2pFLE1BQU1DLGdCQUFnQkMsT0FBTztBQUU3QiwrQkFBK0I7QUFDL0IsTUFBTUMsaUJBQWlCSCxDQUFBQSxRQUN0QkQsU0FBU0MsVUFDVCxDQUFFQSxDQUFBQSxpQkFBaUJJLE1BQUssS0FDeEIsQ0FBRUosQ0FBQUEsaUJBQWlCSyxLQUFJLEtBQ3ZCLENBQUVMLENBQUFBLGlCQUFpQk0sSUFBRztBQUV2QixNQUFNQyxZQUFZLENBQUNDLFFBQVFDLFFBQVFDLFNBQVNDLFNBQVMsSUFBSUMsU0FBUztJQUNqRUYsVUFBVTtRQUNURyxNQUFNO1FBQ05DLFFBQVEsQ0FBQztRQUNULEdBQUdKLE9BQU87SUFDWDtJQUVBLElBQUlDLE9BQU9JLEdBQUcsQ0FBQ1AsU0FBUztRQUN2QixPQUFPRyxPQUFPSyxHQUFHLENBQUNSO0lBQ25CO0lBRUFHLE9BQU9NLEdBQUcsQ0FBQ1QsUUFBUUUsUUFBUUksTUFBTTtJQUVqQyxNQUFNLEVBQUNBLE1BQU0sRUFBQyxHQUFHSjtJQUNqQixPQUFPQSxRQUFRSSxNQUFNO0lBRXJCLE1BQU1JLFdBQVdDLENBQUFBLFFBQVNBLE1BQU1DLEdBQUcsQ0FBQ0MsQ0FBQUEsVUFBV2xCLGVBQWVrQixXQUFXZCxVQUFVYyxTQUFTWixRQUFRQyxTQUFTQyxVQUFVVTtJQUN2SCxJQUFJQyxNQUFNQyxPQUFPLENBQUNmLFNBQVM7UUFDMUIsT0FBT1UsU0FBU1Y7SUFDakI7SUFFQSxLQUFLLE1BQU0sQ0FBQ2dCLEtBQUt4QixNQUFNLElBQUl5QixPQUFPQyxPQUFPLENBQUNsQixRQUFTO1FBQ2xELE1BQU1tQixZQUFZbEIsT0FBT2UsS0FBS3hCLE9BQU9RO1FBRXJDLElBQUltQixjQUFjMUIsZUFBZTtZQUNoQztRQUNEO1FBRUEsSUFBSSxDQUFDMkIsUUFBUUMsVUFBVSxFQUFDQyxnQkFBZ0IsSUFBSSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR0g7UUFFdEQseUJBQXlCO1FBQ3pCLElBQUlDLFdBQVcsYUFBYTtZQUMzQjtRQUNEO1FBRUEsSUFBSWxCLFFBQVFHLElBQUksSUFBSWlCLGlCQUFpQjNCLGVBQWUwQixXQUFXO1lBQzlEQSxXQUFXUCxNQUFNQyxPQUFPLENBQUNNLFlBQ3hCWCxTQUFTVyxZQUNUdEIsVUFBVXNCLFVBQVVwQixRQUFRQyxTQUFTQztRQUN2QztRQUVBRyxNQUFNLENBQUNjLE9BQU8sR0FBR0M7SUFDbEI7SUFFQSxPQUFPZjtBQUNSO0FBRUFpQixPQUFPQyxPQUFPLEdBQUcsQ0FBQ3hCLFFBQVFDLFFBQVFDO0lBQ2pDLElBQUksQ0FBQ1gsU0FBU1MsU0FBUztRQUN0QixNQUFNLElBQUl5QixVQUFVLENBQUMsMEJBQTBCLEVBQUV6QixPQUFPLElBQUksRUFBRSxPQUFPQSxPQUFPLENBQUMsQ0FBQztJQUMvRTtJQUVBLE9BQU9ELFVBQVVDLFFBQVFDLFFBQVFDO0FBQ2xDO0FBRUFxQiw0QkFBNEIsR0FBRzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FyLXJlbnRhbC15b3V0dWJlLy4vbm9kZV9tb2R1bGVzL21hcC1vYmovaW5kZXguanM/ZTQ4MSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGlzT2JqZWN0ID0gdmFsdWUgPT4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbDtcbmNvbnN0IG1hcE9iamVjdFNraXAgPSBTeW1ib2woJ3NraXAnKTtcblxuLy8gQ3VzdG9taXplZCBmb3IgdGhpcyB1c2UtY2FzZVxuY29uc3QgaXNPYmplY3RDdXN0b20gPSB2YWx1ZSA9PlxuXHRpc09iamVjdCh2YWx1ZSkgJiZcblx0ISh2YWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkgJiZcblx0ISh2YWx1ZSBpbnN0YW5jZW9mIEVycm9yKSAmJlxuXHQhKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSk7XG5cbmNvbnN0IG1hcE9iamVjdCA9IChvYmplY3QsIG1hcHBlciwgb3B0aW9ucywgaXNTZWVuID0gbmV3IFdlYWtNYXAoKSkgPT4ge1xuXHRvcHRpb25zID0ge1xuXHRcdGRlZXA6IGZhbHNlLFxuXHRcdHRhcmdldDoge30sXG5cdFx0Li4ub3B0aW9uc1xuXHR9O1xuXG5cdGlmIChpc1NlZW4uaGFzKG9iamVjdCkpIHtcblx0XHRyZXR1cm4gaXNTZWVuLmdldChvYmplY3QpO1xuXHR9XG5cblx0aXNTZWVuLnNldChvYmplY3QsIG9wdGlvbnMudGFyZ2V0KTtcblxuXHRjb25zdCB7dGFyZ2V0fSA9IG9wdGlvbnM7XG5cdGRlbGV0ZSBvcHRpb25zLnRhcmdldDtcblxuXHRjb25zdCBtYXBBcnJheSA9IGFycmF5ID0+IGFycmF5Lm1hcChlbGVtZW50ID0+IGlzT2JqZWN0Q3VzdG9tKGVsZW1lbnQpID8gbWFwT2JqZWN0KGVsZW1lbnQsIG1hcHBlciwgb3B0aW9ucywgaXNTZWVuKSA6IGVsZW1lbnQpO1xuXHRpZiAoQXJyYXkuaXNBcnJheShvYmplY3QpKSB7XG5cdFx0cmV0dXJuIG1hcEFycmF5KG9iamVjdCk7XG5cdH1cblxuXHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvYmplY3QpKSB7XG5cdFx0Y29uc3QgbWFwUmVzdWx0ID0gbWFwcGVyKGtleSwgdmFsdWUsIG9iamVjdCk7XG5cblx0XHRpZiAobWFwUmVzdWx0ID09PSBtYXBPYmplY3RTa2lwKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRsZXQgW25ld0tleSwgbmV3VmFsdWUsIHtzaG91bGRSZWN1cnNlID0gdHJ1ZX0gPSB7fV0gPSBtYXBSZXN1bHQ7XG5cblx0XHQvLyBEcm9wIGBfX3Byb3RvX19gIGtleXMuXG5cdFx0aWYgKG5ld0tleSA9PT0gJ19fcHJvdG9fXycpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChvcHRpb25zLmRlZXAgJiYgc2hvdWxkUmVjdXJzZSAmJiBpc09iamVjdEN1c3RvbShuZXdWYWx1ZSkpIHtcblx0XHRcdG5ld1ZhbHVlID0gQXJyYXkuaXNBcnJheShuZXdWYWx1ZSkgP1xuXHRcdFx0XHRtYXBBcnJheShuZXdWYWx1ZSkgOlxuXHRcdFx0XHRtYXBPYmplY3QobmV3VmFsdWUsIG1hcHBlciwgb3B0aW9ucywgaXNTZWVuKTtcblx0XHR9XG5cblx0XHR0YXJnZXRbbmV3S2V5XSA9IG5ld1ZhbHVlO1xuXHR9XG5cblx0cmV0dXJuIHRhcmdldDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gKG9iamVjdCwgbWFwcGVyLCBvcHRpb25zKSA9PiB7XG5cdGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIGFuIG9iamVjdCwgZ290IFxcYCR7b2JqZWN0fVxcYCAoJHt0eXBlb2Ygb2JqZWN0fSlgKTtcblx0fVxuXG5cdHJldHVybiBtYXBPYmplY3Qob2JqZWN0LCBtYXBwZXIsIG9wdGlvbnMpO1xufTtcblxubW9kdWxlLmV4cG9ydHMubWFwT2JqZWN0U2tpcCA9IG1hcE9iamVjdFNraXA7XG4iXSwibmFtZXMiOlsiaXNPYmplY3QiLCJ2YWx1ZSIsIm1hcE9iamVjdFNraXAiLCJTeW1ib2wiLCJpc09iamVjdEN1c3RvbSIsIlJlZ0V4cCIsIkVycm9yIiwiRGF0ZSIsIm1hcE9iamVjdCIsIm9iamVjdCIsIm1hcHBlciIsIm9wdGlvbnMiLCJpc1NlZW4iLCJXZWFrTWFwIiwiZGVlcCIsInRhcmdldCIsImhhcyIsImdldCIsInNldCIsIm1hcEFycmF5IiwiYXJyYXkiLCJtYXAiLCJlbGVtZW50IiwiQXJyYXkiLCJpc0FycmF5Iiwia2V5IiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcFJlc3VsdCIsIm5ld0tleSIsIm5ld1ZhbHVlIiwic2hvdWxkUmVjdXJzZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJUeXBlRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/map-obj/index.js\n");

/***/ })

};
;