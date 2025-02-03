export const fetchCount = (amount = 1)=> {
    return new Promise <{ data }>(resolve => 
        setTimeout(() => resolve({data}), 500)
    )
}