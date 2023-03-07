*an un-interesting request
with an un-interesting sort*

---

## About t-h-i-s

```JSON
{
    "project-name":"perNum-sort",
    "codetype":"JavaScript",
    "by":"@cinast||coside(r)",
    "isOpen":true,
    "version":"v0-build(test)",
    "status":"hasBugs"
}
```
---
### NOW progress
- find 2 new problems:
  - cannot process **great difference** numbers
  - regional orderly &emsp; (like ` 99,98,97,5,70,56,...`)
---
## What is ***PerNum-sort***
<i style="font-size:0.8em">best:O(---) | badly:O(---);S(---)&#10;  
(okay,I don't know how to calculate😂)</i>

>## Base principle
> a very easy sort.  
just put number in rigth place by one move  
> ```js
>var  place = item / max * length
> ```
>**explanation**:  
>- **item** : value  
>- **max** : the max number in *[group](#grouping)*
>- **length** : length of the *[group](#grouping)*  
>
>according the item's *percentage* to find the rigth place should item're
>### **HOW** dose the sort **work**?
>this is a fast sort **but have to** depend on *bucketSort* **first**.  
>### **- why -**
>pernum is very good in process **Approximate numbers**  or **simple likes**  
><i style="font-size:0.8em">be fast:`[1,5,3,4,2]`or`[1221,1150,1405,1192...]`</i>   
>but not **big differs'**   
><i style="font-size:0.8em">very worse:`[1250,6854,112786,268,3446...]`</i>  
>
>we cannot get **no much accuracy**  
 (especially in great dif & short array)  
&#10; 
>AND you don't kwon what's
``array`` fill with what type of number:  
`random || much repeats ||
simple like.. even Irregeven numbers`  
so make [group](#grouping) is the best choice
>
>---
>### grouping 
>is VERY IMPORTANT to distinguish small and big  
>`var group = []`  
>
>define: **first** is smallest and  **end** is biggest(max)
>
