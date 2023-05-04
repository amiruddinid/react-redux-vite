export async function fetchMobilApi(){
    const mobil = await fetch('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json')
    const res = mobil.json()

    return res
}
export async function filterMobilApi(filter){
    const mobil = await fetch(
        'https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json/?' + filter
    )
    const res = mobil.json()

    return res
}