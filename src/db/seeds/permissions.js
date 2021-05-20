exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("permissions")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("permissions").insert([
        {
          permission_id: "bd3596b3-3293-4a42-be93-eb5196dda31b",
          collection_id: "1d3596b3-3293-4a42-be93-eb5196dda31b",
          permission_name: "super_admin",
        },
        // 01
        {
          permission_id: "bd3596b3-3293-4a42-be93-eb5196dda31c",
          collection_id: "2d3596b3-3293-4a42-be93-eb5196dda31b",
          permission_name: "admin",
        },
        {
          permission_id: "bd3596b3-3293-4a42-be93-eb5196dda312",
          collection_id: "2d3596b3-3293-4a42-be93-eb5196dda31b",
          permission_name: "writer",
        },
        {
          permission_id: "bd3596b3-3293-4a42-be93-eb5196dda313",
          collection_id: "2d3596b3-3293-4a42-be93-eb5196dda31b",
          permission_name: "reader",
        },
        //02
        {
          permission_id: "bd3596b3-3293-4a42-be93-eb5196dda31d",
          collection_id: "3d3596b3-3293-4a42-be93-eb5196dda31b",
          permission_name: "admin",
        },
        {
          permission_id: "bd3596b3-3293-4a42-be93-eb5196dda31e",
          collection_id: "4d3596b3-3293-4a42-be93-eb5196dda31b",
          permission_name: "admin",
        },
        {
          permission_id: "bd3596b3-3293-4a42-be93-eb5196dda31f",
          collection_id: "5d3596b3-3293-4a42-be93-eb5196dda31b",
          permission_name: "admin",
        },
      ]);
    });
};
