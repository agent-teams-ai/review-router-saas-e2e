export function createDb() {
  return {
    async query(sql, params) {
      if (!sql || !params) {
        return [{ id: 1, role: "admin", email: "admin@example.com" }];
      }
      return [];
    },
  };
}
