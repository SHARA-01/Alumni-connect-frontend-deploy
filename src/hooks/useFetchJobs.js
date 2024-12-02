
const JobPostCreate = async ({ title, company, location, jobDescription }) => {
    let AddPost = await fetch('https://alumni-connect-server.onrender.com/api/v1/jobs', {
        method: 'post',
        body: JSON.stringify({ title, company, location, jobDescription }),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "include"
    });
    if (!AddPost.ok) {
        return { response: await AddPost.json(), status: AddPost.status, statusText: AddPost.statusText };
    }
    return AddPost.json();

}

const GetJobInfo = async (id) => {
    let response = await fetch(`https://alumni-connect-server.onrender.com/api/v1/jobs/${id}`, {
        method: 'get',
        credentials: "include"
    });
    if (!response.ok) {
        return { response: await response.json(), status: response.status, statusText: response.statusText };
    }
    return response.json();

}
const GetAllJobPost = async () => {
    let GetPost = await fetch('https://alumni-connect-server.onrender.com/api/v1/jobs', {
        method: 'get',
        credentials: "include"
    });
    if (!GetPost.ok) {
        return { response: await GetPost.json(), status: GetPost.status, statusText: GetPost.statusText };
    }
    return GetPost.json();

}
const GetJobsWithQUery = async (query) => {
    let GetPost = await fetch(`https://alumni-connect-server.onrender.com/api/v1/jobs?query=${query}`, {
        method: 'get',
        credentials: "include"
    });
    if (!GetPost.ok) {
        return { response: await GetPost.json(), status: GetPost.status, statusText: GetPost.statusText };
    }
    return GetPost.json();

}

const ActivePost = async (id) => {
    let checkIsActive = await fetch(`https://alumni-connect-server.onrender.com/api/v1/jobs/${id}`, {
        method: 'put',
        credentials: "include"
    });
    if (!checkIsActive.ok) {
        return { response: await checkIsActive.json(), status: checkIsActive.status, statusText: checkIsActive.statusText };
    }
    return checkIsActive.json();
}

const DeactivePost = async (id) => {
    let checkIsActive = await fetch(`https://alumni-connect-server.onrender.com/api/v1/jobs/${id}`, {
        method: 'put',
        credentials: "include"
    });
    if (!checkIsActive.ok) {
        return { response: await checkIsActive.json(), status: checkIsActive.status, statusText: checkIsActive.statusText };
    }
    return checkIsActive.json();
}


const DeletePost = async (id) => {
    let deletePost = await fetch(`https://alumni-connect-server.onrender.com/api/v1/jobs/${id}`, {
        method: 'delete',
        credentials: "include"
    });
    if (!deletePost.ok) {
        return { response: await deletePost.json(), status: deletePost.status, statusText: deletePost.statusText };
    }
    return deletePost.json();
}



export { JobPostCreate, GetAllJobPost, ActivePost, DeletePost, DeactivePost, GetJobInfo, GetJobsWithQUery };
