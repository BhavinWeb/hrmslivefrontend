"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface Props {
  email: string;
  password: string;
}

export const Login = async ({ email, password }: Props) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
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
  try {
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
  } catch (error) {
    console.log(error);
  }
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
  try {
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
  } catch (error) {
    console.log(error);
  }
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
  try {
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
  } catch (error) {
    console.log(error);
  }
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
  try {
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
  } catch (error) {
    console.log(error);
  }
};

export const DeleteUser = async ({
  user_id,
  path,
}: {
  user_id: number;
  path: string;
}) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};

export const DeleteRole = async ({
  id,
  path,
}: {
  id: number;
  path: string;
}) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};

export const getCountry = async () => {
  try {
    const response = await fetch(`${[process.env.API_URL]}/get-country`, {
      next: { revalidate: 0 },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getState = async ({ countryid }: { countryid: number }) => {
  try {
    const response = await fetch(`${[process.env.API_URL]}/get-state`, {
      method: "POST",
      body: JSON.stringify({ countryid }),
      next: { revalidate: 0 },
    });

    const data = await response.json();

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCitey = async ({ stateid }: { stateid: number }) => {
  try {
    const response = await fetch(`${[process.env.API_URL]}/get-city`, {
      method: "POST",
      body: JSON.stringify({ stateid }),
      next: { revalidate: 0 },
    });

    const data = await response.json();

    return data.data;
  } catch (error) {
    console.log(error);
  }
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
  try {
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
    revalidatePath("/");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateCompanyStatus = async ({ id }: { id: number }) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};

export const getRoles = async () => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};

export const getCompany = async () => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};

export const getCompanyDetail = async () => {
  try {
    const cookie = cookies().get("jwt_token")?.value;
    const respons = await fetch(`${process.env.API_URL}/get-company-details`, {
      headers: {
        Authorization: cookie as string,
      },
      next: { revalidate: 0 },
    });
    const getCompany = await respons.json();
    revalidatePath("/");
    return getCompany.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserList = async () => {
  try {
    const cookie = cookies().get("jwt_token")?.value;
    const respons = await fetch(`${process.env.API_URL}/user-list`, {
      headers: {
        Authorization: cookie as string,
      },
      next: { revalidate: 0 },
    });
    const getUserList = await respons.json();
    return getUserList.data;
  } catch (error) {
    console.log(error);
  }
};

export const forgotPassword = async ({
  email,
  type,
  key,
  password,
}: {
  email: string;
  type: number;
  key?: string;
  password?: string;
}) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};

export const postCompanyDetails = async ({
  id,
  name,
  email,
  CompanyName,
  website,
  contact_number,
  street_address,
  CountryId,
  StateId,
  CityId,
  zipcode,
  type,
  Links,
}: {
  id: number;
  name?: string;
  email?: string;
  CompanyName?: string;
  website?: string;
  contact_number?: string;
  street_address?: string;
  CountryId?: number;
  StateId?: number;
  CityId?: number;
  zipcode?: string;
  type: number;
  Links?: {
    icon: string;
    bgColor: string;
    href: string;
  }[];
}) => {
  try {
    Links = Links
      ? Links
      : [
          {
            icon: "/svg/globe.svg",
            bgColor: "bg-rose-500",
            href: "/cprofile/companydetails",
          },
        ];
    const cookie = cookies().get("jwt_token")?.value;
    const respons = await fetch(`${process.env.API_URL}/update-company/${id}`, {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        CompanyName,
        website,
        contactNumber: contact_number,
        streetaddress: street_address,
        CountryId,
        StateId,
        CityId,
        zipcode,
        Links,
        type,
      }),
      headers: {
        Authorization: cookie as string,
      },
      next: { revalidate: 0 },
    });
    const getData = await respons.json();
    revalidatePath("/");
    return getData;
  } catch (error) {
    console.log(error);
  }
};



export const ChangePassword = async ({
  email,
  oldpassword,
  newpassword,
  confirmpassword,
}: {
  email: string;
  oldpassword: string;
  newpassword?: string;
  confirmpassword?: string;
}) => {
  try {
    const cookie = cookies().get("jwt_token")?.value;
    const respons = await fetch(`${process.env.API_URL}/update-password`, {
      method: "POST",
      body: JSON.stringify({
        email,
        oldpassword,
        newpassword,
        confirmpassword,
      }),
      headers: {
        Authorization: cookie as string,
      },
      next: { revalidate: 0 },
    });
    const getUserList = await respons.json();
    revalidatePath("/");
    return getUserList;
  } catch (error) {
    console.log(error);
  }
};


export const AddDepartment = async ({
  name
}: {
  name: string;
}) => {
  try {
    const cookie = cookies().get("jwt_token")?.value;
    const respons = await fetch(`${process.env.API_URL}/add-department`, {
      method: "POST",
      body: JSON.stringify({
        name
      }),
      headers: {
        Authorization: cookie as string,
      },
      next: { revalidate: 0 },
    });
    const getUserList = await respons.json();
    revalidatePath("/");
    return getUserList;
  } catch (error) {
    console.log(error);
  }
};

export const GetDepartment = async ({
  name
}: {
  name: string;
}) => {
  try {
    const cookie = cookies().get("jwt_token")?.value;
    const respons = await fetch(`${process.env.API_URL}/add-department`, {
      method: "POST",
      body: JSON.stringify({
        name
      }),
      headers: {
        Authorization: cookie as string,
      },
      next: { revalidate: 0 },
    });
    const getUserList = await respons.json();
    revalidatePath("/");
    return getUserList;
  } catch (error) {
    console.log(error);
  }
};

