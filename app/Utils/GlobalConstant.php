<?php

namespace App\Utils;

class GlobalConstant
{
    // Status
    public const STATUS_ACTIVE   = 'active';
    public const STATUS_INACTIVE = 'inactive';
    public const STATUS_PENDING   = 'pending';
    public const STATUS_DRAFT     = 'draft';

    // Default
    public const DEFAULT_PER_PAGE     = 12;
    public const DEFAULT_RECENT_LIMIT = 5;
    public const DEFAULT_THUMB_WIDTH  = 300;
    public const DEFAULT_THUMB_HEIGHT = 170;

    // Order status
    public const ORDER_STATUS_PENDING   = 'pending';
    public const ORDER_STATUS_SHIPPED   = 'shipped';
    public const ORDER_STATUS_DELIVERED = 'delivered';
    public const ORDER_STATUS_CANCELED  = 'canceled';
    public const ORDER_STATUS_REJECTED  = 'rejected';


}
