package wiki.thin.admin.vo;

import lombok.Data;
import wiki.thin.storage.StorageType;

/**
 * @author Beldon
 */
@Data
public class StorageBindVO {
    private StorageType refStorageType;

    private Long refStorageId;
}
