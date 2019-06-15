let globalId = 1;

const idGenerator = () => {
    return `id${globalId++}`
}

export default idGenerator;