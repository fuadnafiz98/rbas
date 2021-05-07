--- get all permissions 
SELECT * FROM groups NATURAL JOIN groups_permissions NATURAL JOIN \
permissions WHERE groups.group_id=groups_permissions.group_id AND groups.group_id=1;

--- get all user info and their groups
select user_name, group_id, group_name from users
natural join groups;

-- from here admin can update user groups

-- get one user all infos
select user_name,groups.group_name, permission_name, permission_create, permission_delete, permission_read
from users \
natural join groups \
natural join groups_permissions \
natural join permissions \
where user_name='fuad';
