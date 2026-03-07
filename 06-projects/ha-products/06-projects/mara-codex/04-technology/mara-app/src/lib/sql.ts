export function splitSqlStatements(sql: string): string[] {
  return sql
    .split(/;\s*\n/g)
    .map((statement) => statement.trim())
    .filter(Boolean);
}
