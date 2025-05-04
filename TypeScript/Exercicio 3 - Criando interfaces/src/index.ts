interface User {
    id: number
    login: string
    name: string
    bio: string
    public_repos: number
    repos_url: string
}

interface Repo {
    name: string
    description: string
    fork: boolean
    stargazers_count: number
}

const users: User[] = []

async function getUser(user: string){
    try {
        const response = await fetch(`https://api.github.com/users/${user}`, {
            headers: {
                'Accept': 'application/json'
            }
        })
        if (response.status !== 200) {
            throw new Error('Usuário não encontrado')
        }
        const userData = await response.json() as User
        users.push(userData)
    } catch (error) {
        console.log(error)
    }
    
}

async function showUser(name: string) {
    const userData = await users.find(user => user.login === name)
    if (typeof userData === 'undefined') {
        console.log('Usuário não encontrado')
    } else {
        console.log(`ID: ${userData.id}
Login: ${userData.login}
Nome: ${userData.name}
Bio: ${userData.bio}
Repositorios publicos: ${userData.public_repos}
URL repositorio: ${userData.repos_url}`)
    }
}

function showAllUsers() {
    let userList = 'Usuários cadastrados:\n\n'
    users.forEach(user => {
        userList += `ID: ${user.id}
Login: ${user.login}
Nome: ${user.name}
Bio: ${user.bio}
Repositorios publicos: ${user.public_repos}
URL repositorio: ${user.repos_url}\n\n`
    })
    console.log(userList)
}

async function getRepos(name: string) {
    try {
        const userData = await users.find(user => user.login === name)
        if (typeof userData === 'undefined') {
            throw new Error('Usuário não encontrado')
        } else if (userData.public_repos === 0) {
            throw new Error('Usuário não possui repositórios')
        }
        const response = await fetch(userData.repos_url, {
            headers: {
                'Accept': 'application/json'
            }
        })
        return await response.json() as Repo[]
    } catch (error) {
        console.log(error)
    }
}

async function showRepos(user: string) {
    const repos = await getRepos(user) as Repo[]
    let repoList = `Repositórios de ${user}:\n\n`
    repos.forEach(repo => {
            repoList += `Nome: ${repo.name}
Descrição: ${repo.description}
É um Fork?: ${repo.fork? 'Sim' : 'Não'}
Stars: ${repo.stargazers_count}\n\n`})
    console.log(repoList)
}

function calcSumRepos() {
    const sum = users.reduce( (acc, user) => acc + user.public_repos, 0)
    console.log(`Total de repositórios: ${sum}`)
}

function showPopularUsers() {
    const topUsers = users.slice().sort((a, b) => b.public_repos - a.public_repos).slice(0, 5)
    let userList = 'Usuários mais populares:\n\n'
    topUsers.forEach(user => {
        userList += `Nome: ${user.name}
Quantidade de repositórios: ${user.public_repos}\n\n`  
    })
    console.log(userList)
}

async function main() {
  await getUser('Vitorhrf')
  await getUser('matheus')
  await getUser('rafael')
  await getUser('andre')
  await getUser('lucas')
  await getUser('amanda')
  await getUser('jose')
  await getUser('maria')
  await showAllUsers()
  await showPopularUsers()
  await showUser('Vitorhrf')
  await showRepos('Vitorhrf')
  await calcSumRepos()
}

main()