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


--- rewriting all queries

--- get user permission 
select collection_id, permission_name from users
cross join user_permissions up
cross join permissions p 
where up.user_id = users.user_id
and up.permission_id = p.permission_id
and users.user_name='fuad'
;

--- get all users of one collection 
select collection_id, permission_name from users
cross join user_permissions up
cross join permissions p 
where up.user_id = users.user_id
and up.permission_id = p.permission_id
--and users.user_name='fuadnafiz'
and collection_id='d6f590e1-067a-4e85-8edb-3d30b5cd3e89'
;

--- check if the permission exists 
	--- if not create a new permission
	--- else get the permission id
select * from permissions p 
where p.collection_id = 'd6f590e1-067a-4e85-8edb-3d30b5cd3e89'
and p.permission_name ='reader';

update user_permissions 
set permission_id ='bd3596b3-3293-4a42-be93-eb5196dda313' 
where user_id = '41146a79-7ddf-4e95-a7f6-ed6455c83f78';
