const getAllUsers = async () => {
  try {
    const resp = await fetch('http://localhost:3000/users');
    const data = await resp.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

const getUserById = async (id) => {
  try {
    const resp = await fetch(`http://localhost:3000/users/?id=${id}&id=3`);
    const data = await resp.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
const createUser = async () => {
  try {
    const resp = await fetch('http://localhost:3000/users', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Damian Correa',
        author: 'Ale',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await resp.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};


const editUserPUT = async () => {
  try {
    const resp = await fetch(`http://localhost:3000/users/${2}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: 'Luis editado',
        author: 'Ale',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await resp.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

const editUserPATCH = async () => {
  try {
    const resp = await fetch(`http://localhost:3000/users/${2}`, {
      method: 'PATCH',
      body: JSON.stringify({
        author: 'Ale (se edito con patch 2)',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await resp.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

const deleteUser = async () => {
  try {
    const resp = await fetch(`http://localhost:3000/users/${2}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await resp.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

