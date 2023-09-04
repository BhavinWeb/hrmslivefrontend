"use server"

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface Props {
  email: string;
  password: string;
}

export const Login = async ({ email, password }: Props) => {
  const reponse = await fetch(`${process.env.API_URL}/signin`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    next: { revalidate: 0 },
  });

  const data = await reponse.json();

  if (data.status === "fail") {
    return data;
  }
  cookies().set("jwt_token", data.token);
  cookies().set("role", data.role);
  return data;
  // redirect("/companyrole");
};

export const LoginOut = async () => {
  cookies().delete("jwt_token");
  cookies().delete("role");
  redirect("/userlogin");
};

export const CreateRole = async ({
  name,
  status,
}: {
  name: string;
  status: "2" | "1";
}) => {
  const cookie = cookies().get("jwt_token")?.value;
  const reponse = await fetch(`${process.env.API_URL}/create-role`, {
    method: "POST",
    body: JSON.stringify({ name, status: parseInt(status) }),
    headers: {
      Authorization: cookie as string,
    },
    next: { revalidate: 0 },
  });
  const data = await reponse.json();
  revalidatePath("/");
  return data;
};

export const updateRole = async ({
  name,
  status,
  id,
}: {
  name: string;
  status: "2" | "1";
  id: number;
}) => {
  const cookie = cookies().get("jwt_token")?.value;
  const reponse = await fetch(`${process.env.API_URL}/update-role`, {
    method: "POST",
    body: JSON.stringify({ name, status: parseInt(status), id }),
    headers: {
      Authorization: cookie as string,
    },
    next: { revalidate: 0 },
  });
  const data = await reponse.json();
  revalidatePath("/");
  return data;
};

export const UserRegister = async ({
  name,
  email,
  password,
  roleid,
}: {
  name: string;
  email: string;
  password: string;
  roleid: string;
}) => {
  const cookie = cookies().get("jwt_token")?.value;
  const reponse = await fetch(`${process.env.API_URL}/user`, {
    method: "POST",
    body: JSON.stringify({
      Name: name,
      Email: email,
      Password: password,
      RoleId: parseInt(roleid),
    }),
    headers: {
      Authorization: cookie as string,
    },
    next: { revalidate: 0 },
  });
  const data = await reponse.json();
  revalidatePath("/");
  return data;
};

export const UserUpdate = async ({
  name,
  email,
  roleid,
}: {
  name: string;
  email: string;
  roleid: string;
}) => {
  const cookie = cookies().get("jwt_token")?.value;
  const reponse = await fetch(`${process.env.API_URL}/update-user`, {
    method: "POST",
    body: JSON.stringify({
      Name: name,
      Email: email,
      RoleId: parseInt(roleid),
    }),
    headers: {
      Authorization: cookie as string,
    },
    next: { revalidate: 0 },
  });
  const data = await reponse.json();
  revalidatePath("/");
  return data;
};

export const DeleteUser = async ({
  user_id,
  path,
}: {
  user_id: number;
  path: string;
}) => {
  const cookie = cookies().get("jwt_token")?.value;
  const reponse = await fetch(`${process.env.API_URL}/delete-user`, {
    method: "POST",
    body: JSON.stringify({ user_id: user_id }),
    headers: {
      Authorization: cookie as string,
    },
    next: { revalidate: 0 },
  });
  const data = await reponse.json();

  revalidatePath(path);
};

export const DeleteRole = async ({
  id,
  path,
}: {
  id: number;
  path: string;
}) => {
  const cookie = cookies().get("jwt_token")?.value;
  const reponse = await fetch(`${process.env.API_URL}/delete-role`, {
    method: "POST",
    body: JSON.stringify({ id }),
    headers: {
      Authorization: cookie as string,
    },
    next: { revalidate: 0 },
  });
  const data = await reponse.json();
  revalidatePath(path);
};

export const getCountry = async () => {
  const response = await fetch(`${[process.env.API_URL]}/get-country`, {
    next: { revalidate: 0 },
  });

  const data = await response.json();

  return data;
};

export const getState = async ({ countryid }: { countryid: string }) => {
  const response = await fetch(`${[process.env.API_URL]}/get-state`, {
    method: "POST",
    body: JSON.stringify({ countryid }),
    next: { revalidate: 0 },
  });

  const data = await response.json();

  return data.data;
};

export const getCitey = async ({ stateid }: { stateid: number }) => {
  const response = await fetch(`${[process.env.API_URL]}/get-city`, {
    method: "POST",
    body: JSON.stringify({ stateid }),
    next: { revalidate: 0 },
  });

  const data = await response.json();

  return data.data;
};

export const createCompany = async ({
  value,
}: {
  value: {
    email: string;
    name: string;
    companyname: string;
    password: string;
    website: string;
    contactnumber: string;
    isCheck: boolean;
  };
}) => {
  const response = await fetch(`${[process.env.API_URL]}/create-company`, {
    method: "POST",
    body: JSON.stringify({
      name: value.name,
      email: value.email,
      companyname: value.companyname,
      password: value.password,
      contactnumber: value.contactnumber,
      website: value.website,
    }),
    next: { revalidate: 0 },
  });

  const data = await response.json();
  console.log(data);
  revalidatePath("/");
  return data;
};

export const updateCompanyStatus = async ({ id }: { id: number }) => {
  const cookie = cookies().get("jwt_token")?.value;
  const response = await fetch(
    `${[process.env.API_URL]}/update-company-status`,
    {
      method: "POST",
      body: JSON.stringify({ id, status: 1 }),
      headers: {
        Authorization: cookie as string,
      },
      next: { revalidate: 0 },
    }
  );

  const data = await response.json();
  revalidatePath("/");
  return data;
};

export const getRoles = async () => {
  const cookie = cookies().get("jwt_token")?.value;
  const respons = await fetch(`${process.env.API_URL}/get-roles`, {
    method: "POST",
    headers: {
      Authorization: cookie as string,
    },
    next: { revalidate: 0 },
  });
  const getRole = await respons.json();
  revalidatePath("/");
  return getRole.data;
};

export const getCompany = async () => {
  const cookie = cookies().get("jwt_token")?.value;
  const respons = await fetch(`${process.env.API_URL}/get-company`, {
    headers: {
      Authorization: cookie as string,
    },
    next: { revalidate: 0 },
  });
  const getCompany = await respons.json();
  revalidatePath("/");
  return getCompany.data;
};

export const getUserList = async () => {
  const cookie = cookies().get("jwt_token")?.value;
  const respons = await fetch(`${process.env.API_URL}/user-list`, {
    headers: {
      Authorization: cookie as string,
    },
    next: { revalidate: 0 },
  });
  const getUserList = await respons.json();
  revalidatePath("/");
  return getUserList.data;
};


export const forgotPassword = async (
  {
    email,
    type,
    key,
    password
  }: {
    email: string;
    type: number;
    key?: string;
    password?: string;
  }
) => {
  const cookie = cookies().get("jwt_token")?.value;
  const respons = await fetch(`${process.env.API_URL}/forgot-password`, {
    method: "POST",
    body: JSON.stringify({
      email,
      type,
      key,
      password,
    }),
    headers: {
      Authorization: cookie as string,
    },
    next: { revalidate: 0 },
  });
  const getUserList = await respons.json();
  revalidatePath("/");
  return getUserList;
};
