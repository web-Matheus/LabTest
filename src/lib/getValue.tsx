export const getValue=(
    value:number,
    min:number,
    max:number,
) =>{
    if(value<min) return min;
    else if(value>max) return max;
    return value;
}