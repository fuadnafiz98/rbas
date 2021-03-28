--- seed user
insert into users 
(user_id, user_name, user_email, user_password, group_id, created_at, updated_at) values
('03ef74f8-cfc1-44bc-8db0-9bc37be2462d', 'fuad', 'fuad@mail.com', '1234', null, now(), now()),
('09d584a9-b5b6-4c80-89d4-86634c7f4039', 'nafiz', 'nafiz@mail.com', '1234', null, now(), now()),
('493db05a-2554-49d0-8f83-403b7d2478f1', 'fuad98', 'fuad98@mail.com', '1234', null, now(), now()),
('d6a8a671-b1a3-4617-8e5c-7a29636a60e8', 'nafiz98', 'nafiz98@mail.com', '1234', null, now(), now())
;

insert into permissions
(permission_id, permission_name, permission_create, permission_read, permission_delete) values
(1, 'user', true, true, true),
(2, 'user', false, false, true),
(3, 'news', true, true, true),
(4, 'news', true, true, false),
(5, 'news', false, true, false),
(6, 'publications', true, true, true),
(7, 'publications', false, true, false),
(8, 'publications', true, true, false);

insert into groups
(group_id, group_name) values
(1, 'admin'),
(2, 'publisher'),
(3, 'editor'),
(4, 'reader');

insert into groups_permissions
(group_id, permission_id) values
(1, 1),
(1, 3),
(1, 6),
(2, 2),
(2, 8),
(2, 9),
(4, 5)
;
