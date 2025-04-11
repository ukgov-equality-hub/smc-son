
pivot_table__create = function(
  pivot_table_source,
  pivot_columns_column_name,
  pivot_rows_column_name,
  pivot_rows_column_2_name = NULL,
  pivot_cells_column_name,
  pivot_table_name = NULL,
  pivot_table_name_column_2 = NULL,
  pivot_table_rows_order_values = NULL,
  pivot_table_rows_2_order_values = NULL,
  pivot_table_columns_order_values = NULL,
  pivot_table_column_names_suffix = NULL
) {
  
  has_2_heading_columns = !is.null(pivot_rows_column_2_name)
  
  PIVOT_COLUMNS_WORKING_COLUMN_NAME = "pivot_columns"
  PIVOT_ROWS_WORKING_COLUMN_NAME = "pivot_rows"
  PIVOT_ROWS_WORKING_COLUMN_2_NAME = "pivot_rows_2"
  
  pivot_table_source = data_frame__rename_column(
    data_frame = pivot_table_source,
    old_column_name = pivot_columns_column_name,
    new_column_name = PIVOT_COLUMNS_WORKING_COLUMN_NAME
  )
  pivot_table_source = data_frame__rename_column(
    data_frame = pivot_table_source,
    old_column_name = pivot_rows_column_name,
    new_column_name = PIVOT_ROWS_WORKING_COLUMN_NAME
  )
  if (has_2_heading_columns) {
    pivot_table_source = data_frame__rename_column(
      data_frame = pivot_table_source,
      old_column_name = pivot_rows_column_2_name,
      new_column_name = PIVOT_ROWS_WORKING_COLUMN_2_NAME
    )
  }
  
  
  if (has_2_heading_columns) {
    pivot_table_check = dcast(pivot_table_source, pivot_rows + pivot_rows_2 ~ pivot_columns, value.var = pivot_cells_column_name, fun.aggregate = length)
  }
  else {
    pivot_table_check = dcast(pivot_table_source, pivot_rows ~ pivot_columns, value.var = pivot_cells_column_name, fun.aggregate = length)
  }
  
  pivot_table_check_except_label_columns = pivot_table_check
  pivot_table_check_except_label_columns = data_frame__remove_columns(
    data_frame = pivot_table_check_except_label_columns,
    columns_to_remove = PIVOT_ROWS_WORKING_COLUMN_NAME
  )
  if (has_2_heading_columns) {
    pivot_table_check_except_label_columns = data_frame__remove_columns(
      data_frame = pivot_table_check_except_label_columns,
      columns_to_remove = PIVOT_ROWS_WORKING_COLUMN_2_NAME
    )
  }
  if (!all(pivot_table_check_except_label_columns == 1)) {
    print(pivot_table_check)
    stop("Each cell in the pivot table should be the aggregate of just 1 source cell")
  }
  
  
  if (has_2_heading_columns) {
    pivot_table = dcast(pivot_table_source, pivot_rows + pivot_rows_2 ~ pivot_columns, value.var = pivot_cells_column_name, fun.aggregate = sum)
  }
  else {
    pivot_table = dcast(pivot_table_source, pivot_rows ~ pivot_columns, value.var = pivot_cells_column_name, fun.aggregate = sum)
  }
  
  if (!is.null(pivot_table_rows_order_values) && !is.null(pivot_table_rows_2_order_values)) {
    pivot_table = data_frame__sort_rows_with_specific_values(
      data_frame = pivot_table,
      column_1 = PIVOT_ROWS_WORKING_COLUMN_NAME,
      values_1 = pivot_table_rows_order_values,
      column_2 = PIVOT_ROWS_WORKING_COLUMN_2_NAME,
      values_2 = pivot_table_rows_2_order_values
    )
  }
  else if (!is.null(pivot_table_rows_order_values)) {
    pivot_table = data_frame__sort_rows_with_specific_values(
      data_frame = pivot_table,
      column_1 = PIVOT_ROWS_WORKING_COLUMN_NAME,
      values_1 = pivot_table_rows_order_values
    )
  }
  
  if (!is.null(pivot_table_columns_order_values)) {
    if (has_2_heading_columns) {
      columns_to_choose = c(PIVOT_ROWS_WORKING_COLUMN_NAME, PIVOT_ROWS_WORKING_COLUMN_2_NAME, pivot_table_columns_order_values)
    }
    else {
      columns_to_choose = c(PIVOT_ROWS_WORKING_COLUMN_NAME, pivot_table_columns_order_values)
    }
    
    pivot_table = data_frame__choose_reorder_columns(
      data_frame = pivot_table,
      columns_to_choose = columns_to_choose
    )
  }
  
  if (has_2_heading_columns) {
    # Remove duplicate values in the first column, so that our HTML generator will create cells with a row-span
    for (i in nrow(pivot_table):2) {
      if (pivot_table[[PIVOT_ROWS_WORKING_COLUMN_NAME]][i] == pivot_table[[PIVOT_ROWS_WORKING_COLUMN_NAME]][i - 1]) {
        pivot_table[[PIVOT_ROWS_WORKING_COLUMN_NAME]][i] = ""
      }
    }
  }
  
  if (!is.null(pivot_table_column_names_suffix)) {
    column_names = colnames(pivot_table)
    column_names = column_names[!column_names %in% c(PIVOT_ROWS_WORKING_COLUMN_NAME, PIVOT_ROWS_WORKING_COLUMN_2_NAME)]
    
    for (column_name in column_names) {
      new_column_name = paste0(column_name, pivot_table_column_names_suffix)
      pivot_table = data_frame__rename_column(
        data_frame = pivot_table,
        old_column_name = column_name,
        new_column_name = new_column_name
      )
    }
  }
  
  if (!is.null(pivot_table_name)) {
    pivot_table = data_frame__rename_column(
      data_frame = pivot_table,
      old_column_name = PIVOT_ROWS_WORKING_COLUMN_NAME,
      new_column_name = pivot_table_name
    )
  }
  if (!is.null(pivot_table_name_column_2) && has_2_heading_columns) {
    pivot_table = data_frame__rename_column(
      data_frame = pivot_table,
      old_column_name = PIVOT_ROWS_WORKING_COLUMN_2_NAME,
      new_column_name = pivot_table_name_column_2
    )
  }
  
  return(pivot_table)
}
