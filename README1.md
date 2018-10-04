1. Tạo migrate thêm mới persons.role_id là foreign key
3. Sửa seeding cho bảng persons (dữ liệu tuỳ ý)
4. Thêm schema person với typeDefs và resolves (Tương tự member)
5. Sửa model person thực hiện các chức năng sau:
* Query
   - getAllPersons: lấy cả person và role của nó sử dụng knex

* Mutation
   - createPerson: input truyền vào sẽ có thêm role_name, khi lưu sẽ lưu cả vào persons và roles (sử dụng transaction)