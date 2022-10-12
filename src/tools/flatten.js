const flattArray = (arr) => {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            for (let j = 0; j < arr[i].length; j++) {
                let value = flattArray(arr[i])
                res.push(value[j])
            }
        } else {
            res.push(arr[i])
        }
    }

    return res
}


export default flattArray