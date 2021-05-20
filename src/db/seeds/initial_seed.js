exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          user_id: "eee0996c-3d4c-44ca-b94f-c6fe271dfae4",
          user_name: "fuad",
          user_email: "fuad@mail.com",
          user_password: "1234",
        },
        {
          user_id: "397f0520-b133-4dc7-83b6-ac5db4e3ab96",
          user_name: "nafiz",
          user_email: "nafiz@mail.com",
          user_password: "1234",
        },
        {
          user_id: "41146a79-7ddf-4e95-a7f6-ed6455c83f78",
          user_name: "fuadnafiz",
          user_email: "fuadnafiz@mail.com",
          user_password: "1234",
        },
        {
          user_id: "2d9d8d45-d505-4a84-b0af-0f1342abbdb3",
          user_name: "nafizfuad",
          user_email: "nafizfuad@mail.com",
          user_password: "1234",
        },
        {
          user_id: "7e63244f-a9ce-439d-bea4-cd9e031823fe",
          user_name: "fuadnafiz98",
          user_email: "fuadnafiz98@mail.com",
          user_password: "1234",
        },
        {
          user_id: "bd3596b3-3293-4a42-be93-eb5196dda31a",
          user_name: "nafizfuad98",
          user_email: "nafizfuad98@mail.com",
          user_password: "1234",
        },
      ]);
    });
};
