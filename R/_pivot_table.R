
pivot_table__create = function(
  pivot_table_source,
  pivot_columns_column_name,
  pivot_columns_column_2_name = NULL,
  pivot_rows_column_name,
  pivot_rows_column_2_name = NULL,
  pivot_cells_column_name,
  pivot_table_name = NULL,
  pivot_table_name_column_2 = NULL,
  pivot_table_rows_order_values = NULL,
  pivot_table_rows_2_order_values = NULL,
  pivot_table_columns_order_values = NULL,
  pivot_table_columns_2_order_values = NULL,
  pivot_table_column_names_suffix = NULL
) {
  
  has_2_columns_of_headings = !is.null(pivot_rows_column_2_name)
  has_2_rows_of_headings = !is.null(pivot_columns_column_2_name)
  
  PIVOT_COLUMNS_WORKING_COLUMN_NAME = "pivot_columns"
  PIVOT_COLUMNS_WORKING_COLUMN_2_NAME = "pivot_columns_2"
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

  if (has_2_columns_of_headings) {
    pivot_table_source = data_frame__rename_column(
      data_frame = pivot_table_source,
      old_column_name = pivot_rows_column_2_name,
      new_column_name = PIVOT_ROWS_WORKING_COLUMN_2_NAME
    )
  }
  
  if (has_2_rows_of_headings) {
    pivot_table_source = data_frame__rename_column(
      data_frame = pivot_table_source,
      old_column_name = pivot_columns_column_2_name,
      new_column_name = PIVOT_COLUMNS_WORKING_COLUMN_2_NAME
    )
    # create combined column level 1 and 2 ordered column names
    ordered_cols = c()
    for (col1 in pivot_table_columns_order_values) {
      for (col2 in pivot_table_columns_2_order_values) {
        ordered_cols <- append(ordered_cols, paste(col1, col2, sep="_"))
      }
    }
  } else {
    ordered_cols = pivot_table_columns_order_values
  }

  
  if (has_2_columns_of_headings) {
    if (has_2_rows_of_headings) {
      pivot_table_check = dcast(pivot_table_source, pivot_rows + pivot_rows_2 ~ pivot_columns + pivot_columns_2, value.var = pivot_cells_column_name, fun.aggregate = length)
    }
    else {
      pivot_table_check = dcast(pivot_table_source, pivot_rows + pivot_rows_2 ~ pivot_columns, value.var = pivot_cells_column_name, fun.aggregate = length)
    }
  } else if (has_2_rows_of_headings) {
      pivot_table_check = dcast(pivot_table_source, pivot_rows ~ pivot_columns + pivot_columns_2, value.var = pivot_cells_column_name, fun.aggregate = length)
  } else {
      pivot_table_check = dcast(pivot_table_source, pivot_rows ~ pivot_columns, value.var = pivot_cells_column_name, fun.aggregate = length)
  }
  
  
  pivot_table_check_except_label_columns = pivot_table_check
  pivot_table_check_except_label_columns = data_frame__remove_columns(
    data_frame = pivot_table_check_except_label_columns,
    columns_to_remove = PIVOT_ROWS_WORKING_COLUMN_NAME
  )
  if (has_2_columns_of_headings) {
    pivot_table_check_except_label_columns = data_frame__remove_columns(
      data_frame = pivot_table_check_except_label_columns,
      columns_to_remove = PIVOT_ROWS_WORKING_COLUMN_2_NAME
    )
  }
  if (!all(pivot_table_check_except_label_columns == 1)) {
    print(pivot_table_check)
    stop("Each cell in the pivot table should be the aggregate of just 1 source cell")
  }
  
  
  if (has_2_columns_of_headings) {
    if (has_2_rows_of_headings) {
      pivot_table = dcast(pivot_table_source, pivot_rows + pivot_rows_2 ~ pivot_columns + pivot_columns_2, value.var = pivot_cells_column_name, fun.aggregate = sum)
    }
    else {
      pivot_table = dcast(pivot_table_source, pivot_rows + pivot_rows_2 ~ pivot_columns, value.var = pivot_cells_column_name, fun.aggregate = sum)
    }
  } else if (has_2_rows_of_headings) {
      pivot_table = dcast(pivot_table_source, pivot_rows ~ pivot_columns + pivot_columns_2, value.var = pivot_cells_column_name, fun.aggregate = sum)
  } else {
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
  } else if (!is.null(pivot_table_rows_order_values)) {
    pivot_table = data_frame__sort_rows_with_specific_values(
      data_frame = pivot_table,
      column_1 = PIVOT_ROWS_WORKING_COLUMN_NAME,
      values_1 = pivot_table_rows_order_values
    )
  }
  
  if (!is.null(ordered_cols)) {
    if (has_2_columns_of_headings) {
      columns_to_choose = c(PIVOT_ROWS_WORKING_COLUMN_NAME, PIVOT_ROWS_WORKING_COLUMN_2_NAME, ordered_cols)
    } else {
      columns_to_choose = c(PIVOT_ROWS_WORKING_COLUMN_NAME, ordered_cols)
    }
    
    pivot_table = data_frame__choose_reorder_columns(
      data_frame = pivot_table,
      columns_to_choose = columns_to_choose
    )
  }
  
  if (has_2_columns_of_headings) {
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
  
  
  if (has_2_rows_of_headings) {
    # Remove duplicate values in the top header, so that our HTML generator will create cells with a row-span
    if (has_2_columns_of_headings) {
      first_header = c("pivot_rows", "pivot_rows_2")
      second_header = c("", "")
      for (concatenated_col in names(pivot_table)[c(-1,-2)]){
        first_header <- append(first_header, str_split_i(concatenated_col, "_", 1))
        second_header <- append(second_header, str_split_i(concatenated_col, "_", 2))
      }
      
      first_header_deduped = c("pivot_rows", "pivot_rows_2")
      for (i in length(first_header):3) {
        if (first_header[i] == first_header[i - 1]) {
          first_header_deduped[i] = ""
        } else {
          first_header_deduped[i] = first_header[i]
        }
      }
      
    } else {
      first_header = c("pivot_rows")
      second_header = c("")
      for (concatenated_col in names(pivot_table)[c(-1)]){
        first_header <- append(first_header, str_split_i(concatenated_col, "_", 1))
        second_header <- append(second_header, str_split_i(concatenated_col, "_", 2))
      }
      
      first_header_deduped = c("pivot_rows")
      for (i in length(first_header):2) {
        if (first_header[i] == first_header[i - 1]) {
          first_header_deduped[i] = ""
        } else {
          first_header_deduped[i] = first_header[i]
        }
      }
    }
    
    
    names(pivot_table) <- first_header_deduped
    pivot_table <- rbind(second_header, pivot_table)
    
  }
  

  if (!is.null(pivot_table_name)) {
    pivot_table = data_frame__rename_column(
      data_frame = pivot_table,
      old_column_name = PIVOT_ROWS_WORKING_COLUMN_NAME,
      new_column_name = pivot_table_name
    )
  }
  if (!is.null(pivot_table_name_column_2) && has_2_columns_of_headings) {
    pivot_table = data_frame__rename_column(
      data_frame = pivot_table,
      old_column_name = PIVOT_ROWS_WORKING_COLUMN_2_NAME,
      new_column_name = pivot_table_name_column_2
    )
  }
  
  return(pivot_table)
}
