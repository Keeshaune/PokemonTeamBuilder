import axios from "axios"

export const fetchStats = async (id) => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    let pStats = {}
    data.stats.forEach(slot => pStats[slot.stat.name] =  slot.base_stat)
    return pStats
}

export const fetchIdByName = async (name) => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    return data.id
}

export const fetchName = async (id) => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return data.name
}

export const fetchImg = async (id) => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return data.sprites.other["official-artwork"].front_default
}

export const fetchType = async (id) => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return data.types.map( type => {
        return type.type.name
    })
}

export const fetchAdvs = async (id) => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const typeUrls = data.types.map( type => type.type.url) // returns [type1url, type2url]
    const advArray = await Promise.all(typeUrls.map( async typeUrl => {
        const { data } = await axios.get(typeUrl)
        return data.damage_relations.double_damage_to.map( type => type.name) // returns [[type1adv1, ... ], [type2adv1, ...]]
    }))
    return advArray.flat()
}

export const calcStats = (stat, compStat) => {
    const diff = stat - compStat
    if (diff < 0) return `${stat} (${diff})`
    else if (diff > 0) return `${stat} (+${diff})`
    else return stat
}

export const calcTotalStats = (stats) => {
    let total = 0
    for (let key in stats) {
        total += stats[key]
    }
    return total
}
